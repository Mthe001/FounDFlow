import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import JSON data
import donateData from '../../public/donate.json';

const HowItWorks = () => {
    const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
    const [isDivisionModalOpen, setIsDivisionModalOpen] = useState(false);

    const collectionPoints = [
        { name: "Location 1", address: "123 Street, City" },
        { name: "Location 2", address: "456 Avenue, City" },
        { name: "Location 3", address: "789 Boulevard, City" },
        { name: "Location 4", address: "1011 Drive, City" },
    ];

    // State to hold supported divisions
    const [supportedDivisions, setSupportedDivisions] = useState([]);

    // Load supported divisions from JSON
    useEffect(() => {
        if (donateData && donateData.supportedDivisions) {
            setSupportedDivisions(donateData.supportedDivisions);
        }
    }, []);

    const openCollectionModal = () => setIsCollectionModalOpen(true);
    const closeCollectionModal = () => setIsCollectionModalOpen(false);

    const openDivisionModal = () => setIsDivisionModalOpen(true);
    const closeDivisionModal = () => setIsDivisionModalOpen(false);

    return (
        <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Here's how you can make a difference by donating and supporting our cause.
                </p>
            </div>

            {/* Instructions Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">1. Make a Donation</h3>
                    <p className="text-lg mb-4">
                        Making a donation is simple! Choose the amount you want to donate and submit your payment securely. Every little bit helps.
                    </p>
                    <Link to="/donation-campaigns" className="bg-white text-blue-600 text-lg py-2 px-4 rounded-full hover:bg-blue-50 transition duration-300">
                        Donate Now
                    </Link>
                </div>

                <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">2. Collection Points</h3>
                    <p className="text-lg mb-4">
                        You can drop off your donations at one of our collection points. We have multiple locations available, and we ensure they are easily accessible.
                    </p>
                    <button
                        onClick={openCollectionModal}
                        className="bg-white text-green-600 text-lg py-2 px-4 rounded-full hover:bg-green-50 transition duration-300"
                    >
                        Find Collection Points
                    </button>
                </div>

                <div className="bg-yellow-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">3. Supported Divisions</h3>
                    <p className="text-lg mb-4">
                        We support various causes, including healthcare, education, and environmental conservation. Your donations help fund these divisions.
                    </p>
                    <button
                        onClick={openDivisionModal}
                        className="bg-white text-yellow-600 text-lg py-2 px-4 rounded-full hover:bg-yellow-50 transition duration-300"
                    >
                        View Supported Divisions
                    </button>
                </div>
            </section>

            {/* How You Can Contribute Section */}
            <section className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 text-center">How You Can Contribute</h2>
                <div className="text-lg sm:text-xl text-gray-700 leading-relaxed space-y-4">
                    <p>
                        <span className="font-semibold">Donate Money:</span> Your financial contribution supports our projects, allowing us to help those in need. No amount is too small, and your generosity has a real impact.
                    </p>
                    <p>
                        <span className="font-semibold">Donate Goods:</span> You can also donate goods, such as clothes, food, or books. We encourage donations to be dropped off at our collection points.
                    </p>
                    <p>
                        <span className="font-semibold">Volunteer Your Time:</span> Join our team of volunteers to help with organizing events, managing collections, and supporting our programs. Your time is a precious contribution.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center mt-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Get Involved Today!</h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    Ready to make a difference? Your support is the key to our success. Together, we can build a better future for all.
                </p>
                <Link to="/dashboard" className="bg-blue-600 text-white text-xl py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Get Started
                </Link>
            </section>

            {/* Modal to show collection points */}
            {isCollectionModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Collection Points</h3>
                        <ul className="space-y-4">
                            {collectionPoints.map((point, index) => (
                                <li key={index} className="text-lg text-gray-700">
                                    <strong>{point.name}</strong> - {point.address}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={closeCollectionModal}
                            className="mt-6 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Modal to show supported divisions */}
            {isDivisionModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Supported Divisions</h3>
                        <ul className="space-y-4">
                            {supportedDivisions.map((division, index) => (
                                <li key={index} className="text-lg text-gray-700">
                                    <strong>{division.title}:</strong> {division.description}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={closeDivisionModal}
                            className="mt-6 bg-yellow-600 text-white py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HowItWorks;
