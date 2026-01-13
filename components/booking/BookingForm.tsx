import { useState } from "react";
import api from "@/lib/api";

export default function BookingForm({ propertyId }: { propertyId: string }) {
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    setLoading(true);
    try {
      await api.post("/bookings", {
        propertyId,
        checkIn: "2025-01-10",
        checkOut: "2025-01-12",
      });
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="bg-blue-600 text-white px-4 py-2"
      disabled={loading}
    >
      {loading ? "Booking..." : "Book Now"}
    </button>
  );
}
