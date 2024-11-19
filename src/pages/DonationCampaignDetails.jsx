

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationCampaignDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState(null);
    const [formData, setFormData] = useState({
        quantity: '',
        itemType: '',
        pickupLocation: '',
        additionalNotes: ''
    });

    useEffect(() => {
        const fetchCampaignDetails = async () => {
            try {
                const response = await fetch('/donate.json');
                const data = await response.json();

                const campaignDetails = data.find(campaign => campaign.id === Number(id));

                if (campaignDetails) {
                    setCampaign(campaignDetails);
                } else {
                    console.error("Campaign not found with id:", id);
                }
            } catch (error) {
                console.error("Error fetching campaign details:", error);
            }
        };

        fetchCampaignDetails();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const { quantity, itemType, pickupLocation } = formData;
        if (!quantity || !itemType || !pickupLocation) {
            toast.error('Please fill in all required fields!');
            return;
        }

        toast.success('Donation Submitted Successfully!');


        setTimeout(() => {
            toast.info('Thank you! We will reach your destination soon.');
            navigate(-1);
        }, 3000);


        setFormData({
            quantity: '',
            itemType: '',
            pickupLocation: '',
            additionalNotes: ''
        });
    };

    if (!campaign) return <Loading />;

    return (
        <div className="p-6">
            {/* Campaign Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center">{campaign.title}</h2>
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full md:h-72 h-48 lg:h-96 object-cover rounded-md mt-4"
                />
                <p className="text-lg text-gray-700 mt-4">{campaign.description}</p>
                <div className="mt-4">
                    <p><strong>Status:</strong> {campaign.status}</p>
                    <p><strong>Contact:</strong> {campaign.contactInfo}</p>
                    <p><strong>Division:</strong> {campaign.division}</p>
                </div>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
                <h3 className="text-2xl font-semibold mb-4">Donation Details</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Allowed Item Types:</strong> {campaign.allowedItemTypes.join(', ')}</li>
                    <li><strong>Pickup Locations:</strong> {campaign.locations.join(', ')}</li>
                </ul>


                <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2">Donation Form Fields</h4>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="block">
                            <span className="text-gray-700">Quantity</span>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="Enter quantity (e.g., 3)"
                                className="input input-bordered w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Item Type</span>
                            <select
                                name="itemType"
                                value={formData.itemType}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Item Type</option>
                                {campaign.allowedItemTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Pickup Location</span>
                            <select
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Pickup Location</option>
                                {campaign.locations.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Additional Notes</span>
                            <textarea
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleChange}
                                placeholder="Enter any specific instructions (optional)"
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </label>

                        {/* Cancel and Submit Buttons */}
                        <div className="flex justify-between gap-4 mt-6">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit Donation
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default DonationCampaignDetails;
