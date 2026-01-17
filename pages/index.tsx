import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps, PROPERTYLISTINGSAMPLE } from "@/constants";
import api from "@/lib/api";

export default function Home() {
  // State typed as PropertyProps[]
  const [properties, setProperties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
        setError(""); // Clear any previous error
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Loading state
  if (loading) {
    return <p className="text-center mt-10">Loading properties...</p>;
  }

  // Error state
  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  // Main render
  return (
    <div className="container mx-auto px-4 py-6">
      {properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}
