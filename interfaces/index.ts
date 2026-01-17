export interface AddressProps {
    state: string;
    city: string;
    country: string;
}

export interface OffersProps {
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps {
    name: string;
    address: AddressProps;
    rating: number;
    category: string[];
    price: number;
    offers: OffersProps;
    image: string;
    discount: string;
}

export interface Property {
    id: number;
    title: string;
    price: number;
    description: string;
}