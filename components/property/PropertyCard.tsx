interface Property {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    image: string;
}



interface PropertyDetailProps {
    property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
            />

            <div className="mt-6">
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <p className="text-gray-600 mt-2">{property.location}</p>

                <p className="text-indigo-600 font-semibold text-xl mt-4">
                    ${property.price} / night
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed">
                    {property.description}
                </p>
            </div>
        </div>
    );
}
