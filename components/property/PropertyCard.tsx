import React from "react";
import { PropertyProps } from "@/constants";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="aspect-w-16 aspect-h-10">
        <img
          src={property.image}
          alt={`${property.name} image`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{property.name}</h3>
            <p className="text-sm text-gray-500">
              {property.address.city}, {property.address.country}
            </p>
          </div>

          <div className="text-right">
            <div className="font-semibold">${property.price}</div>
            <div className="text-sm text-yellow-600">
              ⭐ {property.rating}
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {property.category.slice(0, 3).map((c: string) => (
            <span
              key={c}
              className="px-2 py-0.5 border rounded text-gray-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
