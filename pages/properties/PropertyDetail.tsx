interface PropertyDetailProps {
  property: {
    title: string;
    location: string;
    price: number;
    description: string;
    image: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div>
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-xl font-semibold mt-2">${property.price}/night</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
