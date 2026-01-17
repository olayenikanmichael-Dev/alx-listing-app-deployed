import React from "react";
import { PropertyProps } from "@/constants";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />

      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-500 mb-4">
        {property.address.city}, {property.address.state},{" "}
        {property.address.country}
      </p>

      <div className="flex items-center mb-4">
        <span className="font-semibold text-xl">${property.price}</span>
        <span className="ml-4 text-yellow-600">⭐ {property.rating}</span>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Categories:</h3>
        <div className="flex flex-wrap gap-2">
          {property.category.map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 border rounded text-gray-600 text-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">Offers:</h3>
        <ul className="text-gray-700 text-sm">
          <li>Bed: {property.offers.bed}</li>
          <li>Shower: {property.offers.shower}</li>
          <li>Occupants: {property.offers.occupants}</li>
        </ul>
      </div>

      {property.discount && (
        <div className="text-red-500 font-semibold">
          Discount: {property.discount}%
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
