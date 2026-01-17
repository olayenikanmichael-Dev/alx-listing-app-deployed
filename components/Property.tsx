import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { PropertyProps } from '@/interfaces';

interface PropertyCardProps {
    property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const discountPrice = property.discount
        ? Math.round(property.price * (1 - parseInt(property.discount) / 100))
        : null;

    return (
        <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {property.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {property.discount}% OFF
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Name and Rating */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                        {property.name}
                    </h3>
                    <div className="flex items-center space-x-1 ml-2">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-900 font-medium">{property.rating}</span>
                    </div>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-500 mb-3">
                    {property.address.city}, {property.address.state}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                    <div>
                        {discountPrice ? (
                            <>
                                <span className="text-2xl font-bold text-gray-900">${discountPrice}</span>
                                <span className="text-sm text-gray-500 line-through ml-2">${property.price}</span>
                            </>
                        ) : (
                            <span className="text-2xl font-bold text-gray-900">${property.price}</span>
                        )}
                        <span className="text-sm text-gray-500">/night</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;