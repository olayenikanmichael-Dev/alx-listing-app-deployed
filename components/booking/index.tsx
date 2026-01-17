import axios from "axios";
import { useState } from "react";

interface BookingFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    billingAddress: string;
}

export default function BookingForm() {
    const [formData, setFormData] = useState<BookingFormData>({
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
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        return Object.values(formData).every((field) => field.trim() !== "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!validateForm()) {
            setError("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        try {
            await axios.post("/api/bookings", formData);
            setSuccess("Booking confirmed successfully!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                cardNumber: "",
                expirationDate: "",
                cvv: "",
                billingAddress: "",
            });
        } catch (err) {
            console.error("Booking submission failed:", err);
            setError("Failed to submit booking. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Confirm Your Booking</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {[
                    { name: "firstName", label: "First Name" },
                    { name: "lastName", label: "Last Name" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "phoneNumber", label: "Phone Number" },
                    { name: "cardNumber", label: "Card Number" },
                    { name: "expirationDate", label: "Expiration Date" },
                    { name: "cvv", label: "CVV" },
                ].map(({ name, label, type = "text" }) => (
                    <input
                        key={name}
                        type={type}
                        name={name}
                        placeholder={label}
                        value={(formData as any)[name]}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                    />
                ))}

                <textarea
                    name="billingAddress"
                    placeholder="Billing Address"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className="w-full p-3 border rounded"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 disabled:opacity-50"
                >
                    {loading ? "Processing..." : "Confirm & Pay"}
                </button>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {success && <p className="text-green-600 mt-2">{success}</p>}
            </form>
        </div>
    );
}
