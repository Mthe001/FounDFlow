import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
    const { title, image, description, status, contactInfo, division, id } = campaign;
    const navigate = useNavigate();

    const handleViewDetails = () => {

        navigate(`/donation-campaigns/${id}`);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 my-2">{description}</p>
            <p className="text-sm text-gray-500"><strong>Status:</strong> {status}</p>
            <p className="text-sm text-gray-500"><strong>Contact:</strong> {contactInfo}</p>
            <p className="text-sm text-gray-500"><strong>Division:</strong> {division}</p>

            {/* View Details button */}
            <button
                onClick={handleViewDetails}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
                View Details
            </button>
        </div>
    );
};

export default CampaignCard;
