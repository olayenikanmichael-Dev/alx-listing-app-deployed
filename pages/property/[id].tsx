import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyDetail from "@/components/property/PropertyCard";
// import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    image: string;
}

export default function PropertyDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;

        const fetchProperty = async () => {
            try {
                const response = await axios.get(`/api/properties/${id}`);
                setProperty(response.data);
            } catch (err) {
                console.error("Error fetching property details:", err);
                setError("Failed to load property details");
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg font-semibold">Loading property...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10 text-red-600 font-medium">
                {error}
            </div>
        );
    }

    if (!property) {
        return (
            <div className="text-center mt-10">
                <p>Property not found</p>
            </div>
        );
    }

    return <PropertyDetail property={property} />;
}
