import React, { useEffect, useState } from 'react';
import CampaignCard from '../Card/CampaignCard'; // Assuming CampaignCard is the reusable card component

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);  // State to hold fetched data
    const [loading, setLoading] = useState(true);    // State for loading indicator
    const [error, setError] = useState(null);        // State for handling errors

    useEffect(() => {
        // Fetch the data from the local JSON or API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('/donate.json'); // Correct path to the local JSON file
                if (!response.ok) {
                    throw new Error('Failed to fetch campaigns data');
                }
                const data = await response.json(); // Parse the JSON data
                setCampaigns(data);                  // Set data to state
                setLoading(false);                   // Turn off loading once data is fetched
            } catch (error) {
                setError(error.message);            // Set error message if something goes wrong
                setLoading(false);                  // Turn off loading
            }
        };

        fetchData(); // Call the function to fetch data
    }, []); // Empty dependency array means it runs only once after component mounts

    // If loading, show a loading message
    if (loading) {
        return <p>Loading campaigns...</p>;
    }

    // If there's an error, show an error message
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Donation Campaigns</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {campaigns.length === 0 ? (
                    <p className="text-center text-gray-500 text-xl">No donation campaigns available.</p>
                ) : (
                    campaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))
                )}
            </div>
        </div>
    );
};

export default DonationCampaigns;
