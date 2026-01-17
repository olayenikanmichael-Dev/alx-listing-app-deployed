import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
    id: number;
    author: string;
    rating: number;
    comment: string;
}

interface ReviewSectionProps {
    propertyId: number;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!propertyId) return;

        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `/api/properties/${propertyId}/reviews`
                );
                setReviews(response.data);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [propertyId]);

    if (loading) {
        return <p className="text-gray-500">Loading reviews...</p>;
    }

    if (error) {
        return <p className="text-red-600">{error}</p>;
    }

    if (reviews.length === 0) {
        return <p className="text-gray-500">No reviews yet.</p>;
    }

    return (
        <div className="mt-6 space-y-4">
            <h2 className="text-xl font-semibold">Reviews</h2>

            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="border rounded-lg p-4 shadow-sm"
                >
                    <div className="flex justify-between items-center">
                        <p className="font-medium">{review.author}</p>
                        <p className="text-yellow-500">⭐ {review.rating}/5</p>
                    </div>

                    <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
            ))}
        </div>
    );
}
