import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const DonationForm = () => {
    const [quantity, setQuantity] = useState('');
    const [itemType, setItemType] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Thank you! We will reach your destination soon", {
            autoClose: 3000,
        });


        setQuantity('');
        setItemType('');
        setPickupLocation('');
        setAdditionalNotes('');


        setTimeout(() => {
            navigate(-2);
        }, 4000);
    };

    const handleCancel = () => {

        navigate(-1);
    };

    const handleDonateMore = () => {

        setQuantity('');
        setItemType('');
        setPickupLocation('');
        setAdditionalNotes('');
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Donation Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-semibold">Quantity of items</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter quantity"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="itemType" className="block text-sm font-semibold">Item Type</label>
                    <input
                        type="text"
                        id="itemType"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter item type"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="pickupLocation" className="block text-sm font-semibold">Pickup Location</label>
                    <input
                        type="text"
                        id="pickupLocation"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter pickup location"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold">Additional Notes (Optional)</label>
                    <textarea
                        id="additionalNotes"
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter any additional notes"
                    />
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-full px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-200"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Submit Donation
                    </button>

                    <button
                        type="button"
                        onClick={handleDonateMore}
                        className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                    >
                        Donate More
                    </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default DonationForm;
