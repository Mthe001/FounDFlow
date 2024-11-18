// import React, { useEffect, useState } from 'react';
// import CampaignCard from '../Card/CampaignCard'; // Assuming CampaignCard is the reusable card component

// const DonationCampaigns = () => {
//     const [campaigns, setCampaigns] = useState([]);  // State to hold fetched data
//     const [loading, setLoading] = useState(true);    // State for loading indicator
//     const [error, setError] = useState(null);

//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/donate.json');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch campaigns data');
//                 }
//                 const data = await response.json();
//                 setCampaigns(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error.message);
//                 setLoading(false);
//             }
//         };

//         fetchData(); // Call the function to fetch data
//     }, []); // Empty dependency array means it runs only once after component mounts

//     // If loading, show a loading message
//     if (loading) {
//         return <p>Loading campaigns...</p>;
//     }

//     // If there's an error, show an error message
//     if (error) {
//         return <p>Error: {error}</p>;
//     }

//     return (
//         <div className="mt-10">
//             <h2 className="text-3xl font-bold text-center mb-6">Donation Campaigns</h2>
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
//                 {campaigns.length === 0 ? (
//                     <p className="text-center text-gray-500 text-xl">No donation campaigns available.</p>
//                 ) : (
//                     campaigns.map((campaign) => (
//                         <CampaignCard key={campaign.id} campaign={campaign} />
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default DonationCampaigns;




import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CampaignCard from '../Card/CampaignCard'; // Assuming CampaignCard is the reusable card component

gsap.registerPlugin(ScrollTrigger);

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]); // State to hold fetched data
    const [loading, setLoading] = useState(true);   // State for loading indicator
    const [error, setError] = useState(null);
    const campaignsRef = useRef([]);               // Ref to track campaign cards

    useEffect(() => {
        // Fetch campaigns data
        const fetchData = async () => {
            try {
                const response = await fetch('/donate.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch campaigns data');
                }
                const data = await response.json();
                setCampaigns(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (campaigns.length > 0) {
            // Add staggered animations for campaign cards
            gsap.fromTo(
                campaignsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.campaign-grid', // Target container for scroll animation
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    }, [campaigns]);

    // Loading and error handling
    if (loading) {
        return <p>Loading campaigns...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Donation Campaigns</h2>
            <div className="campaign-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {campaigns.length === 0 ? (
                    <p className="text-center text-gray-500 text-xl">No donation campaigns available.</p>
                ) : (
                    campaigns.map((campaign, index) => (
                        <div
                            key={campaign.id}
                            ref={(el) => (campaignsRef.current[index] = el)} // Attach refs to each card
                        >
                            <CampaignCard campaign={campaign} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DonationCampaigns;
