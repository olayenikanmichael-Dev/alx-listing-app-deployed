export interface PropertyProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  category: string[];
  address: {
    city: string;
    country: string;
  };
}
