import { useEffect, useState } from "react";
import api from "@/lib/api";

export default function ReviewList({ propertyId }: { propertyId: string }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get(`/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border p-2 mb-2">
          <p>{review.comment}</p>
          <span>⭐ {review.rating}</span>
        </div>
      ))}
    </div>
  );
}
