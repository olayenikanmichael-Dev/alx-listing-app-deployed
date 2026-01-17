import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps, PROPERTYLISTINGSAMPLE } from "@/constants";
import api from "@/lib/api";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await api.get("/properties");

        // Transform API response to PropertyProps
        const formatted: PropertyProps[] = response.data.map((item: any) => ({
          name: item.title ?? "Unnamed Property",
          address: {
            state: item.state ?? "",
            city: item.city ?? "",
            country: item.country ?? "",
          },
          rating: item.rating ?? 0,
          category: item.category ?? [],
          price: item.price ?? 0,
          offers: {
            bed: item.bed ?? "0",
            shower: item.shower ?? "0",
            occupants: item.occupants ?? "",
          },
          image: item.image ?? "",
          discount: item.discount ?? "",
        }));

        setProperties(formatted);
      } catch (err) {
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}
