import React from 'react';

const CampaignCard = ({ campaign }) => {
    const { title, image, description, status, contactInfo, division } = campaign;

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={image} alt={title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 my-2">{description}</p>
            <p className="text-sm text-gray-500"><strong>Status:</strong> {status}</p>
            <p className="text-sm text-gray-500"><strong>Contact:</strong> {contactInfo}</p>
            <p className="text-sm text-gray-500"><strong>Division:</strong> {division}</p>
        </div>
    );
};

export default CampaignCard;
