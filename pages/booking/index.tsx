import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Basic validation
    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    setLoading(true);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
    } catch (err) {
      console.error("Booking error:", err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <input
        name="cardNumber"
        placeholder="Card Number"
        onChange={handleChange}
      />
      <input
        name="expirationDate"
        placeholder="MM/YY"
        onChange={handleChange}
      />
      <input name="cvv" placeholder="CVV" onChange={handleChange} />
      <textarea
        name="billingAddress"
        placeholder="Billing Address"
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-600">Booking confirmed successfully!</p>
      )}
    </form>
  );
}
