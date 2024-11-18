import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import PrivateRoute from '../routes/PrivateRoutes';

const DonationCampaignDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState(null);

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

    if (!campaign) return <Loading />;

    return (
        <div className="p-6">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                {/* Campaign Title */}
                <h2 className="text-3xl font-bold text-center">{campaign.title}</h2>

                {/* Campaign Image */}
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full md:h-72 h-48 lg:h-96 object-cover rounded-md mt-4"
                />

                {/* Campaign Description */}
                <p className="text-lg text-gray-700 mt-4">{campaign.description}</p>

                {/* Campaign Status, Contact, and Division */}
                <div className="mt-4">
                    <p><strong>Status:</strong> {campaign.status}</p>
                    <p><strong>Contact:</strong> {campaign.contactInfo}</p>
                    <p><strong>Division:</strong> {campaign.division}</p>
                </div>
            </div>

            {/* Donate Now and Back Buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <PrivateRoute>
                    <button
                        onClick={() => navigate('/donation-form')}
                        className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                    >
                        Donate Now
                    </button>
                </PrivateRoute>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default DonationCampaignDetails;
