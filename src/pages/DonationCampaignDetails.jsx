import React, { useEffect, useState } from 'react';
import CampaignCard from '../Card/CampaignCard';  // Assuming you're using a reusable card component

const DonationCampaignDetails = ({ category }) => {
    const [campaigns, setCampaigns] = useState([]);  // State to hold campaigns data

    useEffect(() => {
        // Fetch the donation campaign data from your JSON file or API
        fetch('/path/to/donate.json')  // Make sure the path is correct
            .then(res => res.json())
            .then(data => setCampaigns(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    // If you want to filter the campaigns by a certain category or status
    const filteredCampaigns = campaigns.filter(campaign =>
        category === "All Campaigns" || campaign.division === category
    );

    return (
        <div className="mt-10">
            {filteredCampaigns.length === 0 ? (
                <p className="text-center text-gray-500 text-3xl w-[90%]">No campaigns available in this category.</p>
            ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {filteredCampaigns.map(campaign => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DonationCampaignDetails;
