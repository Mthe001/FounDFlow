

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import donateData from '../../public/donate.json';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
    const [isCollectionModalOpen, setIsCollectionModalOpen] = useState(false);
    const [isDivisionModalOpen, setIsDivisionModalOpen] = useState(false);
    const [supportedDivisions, setSupportedDivisions] = useState([]);

    const sectionRefs = useRef([]);
    const headingRef = useRef(null);

    useEffect(() => {
        if (donateData && donateData.supportedDivisions) {
            setSupportedDivisions(donateData.supportedDivisions);
        }

        // GSAP animations for sections
        sectionRefs.current.forEach((section, index) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        end: 'top 50%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        // GSAP animation for the heading
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    const openCollectionModal = () => setIsCollectionModalOpen(true);
    const closeCollectionModal = () => setIsCollectionModalOpen(false);

    const openDivisionModal = () => setIsDivisionModalOpen(true);
    const closeDivisionModal = () => setIsDivisionModalOpen(false);

    const collectionPoints = [
        { name: 'Location 1', address: '123 Street, City' },
        { name: 'Location 2', address: '456 Avenue, City' },
        { name: 'Location 3', address: '789 Boulevard, City' },
        { name: 'Location 4', address: '1011 Drive, City' },
    ];

    return (
        <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12" ref={headingRef}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Here's how you can make a difference by donating and supporting our cause.
                </p>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[{
                    bgColor: 'bg-blue-600',
                    title: '1. Make a Donation',
                    content:
                        'Making a donation is simple! Choose the amount you want to donate and submit your payment securely. Every little bit helps.',
                    buttonText: 'Donate Now',
                    buttonLink: '/donation-campaigns',
                },
                {
                    bgColor: 'bg-green-600',
                    title: '2. Collection Points',
                    content:
                        'You can drop off your donations at one of our collection points. We have multiple locations available, and we ensure they are easily accessible.',
                    buttonText: 'Find Collection Points',
                    onClick: openCollectionModal,
                },
                {
                    bgColor: 'bg-yellow-600',
                    title: '3. Supported Divisions',
                    content:
                        'We support various causes, including healthcare, education, and environmental conservation. Your donations help fund these divisions.',
                    buttonText: 'View Supported Divisions',
                    onClick: openDivisionModal,
                },
                ].map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className={`${item.bgColor} text-white p-8 rounded-lg shadow-lg`}
                    >
                        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-lg mb-4">{item.content}</p>
                        {item.buttonLink ? (
                            <Link
                                to={item.buttonLink}
                                className="bg-white text-blue-600 text-lg py-2 px-4 rounded-full hover:bg-blue-50 transition duration-300"
                            >
                                {item.buttonText}
                            </Link>
                        ) : (
                            <button
                                onClick={item.onClick}
                                className="bg-white text-green-600 text-lg py-2 px-4 rounded-full hover:bg-green-50 transition duration-300"
                            >
                                {item.buttonText}
                            </button>
                        )}
                    </div>
                ))}
            </section>

            {/* Collection Points Modal */}
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

            {/* Supported Divisions Modal */}
            {isDivisionModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Supported Divisions</h3>
                        <ul className="space-y-4">
                            <li className="text-lg text-gray-700">
                                Nothing information here!
                                We are looking for !
                            </li>
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
