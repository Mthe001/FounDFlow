

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        id: 1,
        title: "Support Education for All",
        image: "https://images.pexels.com/photos/1595392/pexels-photo-1595392.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Providing school supplies and scholarships to underprivileged children.",
        status: "Active",
        contactInfo: "education@donate.org",
        division: "Education",
        supportDivision: [
            {
                name: "Education Assistance",
                description: "Provide access to education for children in underserved areas."
            }
        ]
    },
    {
        id: 2,
        title: "Healthcare Access Initiative",
        image: "https://images.pexels.com/photos/7475690/pexels-photo-7475690.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Raising funds for medical camps in rural areas.",
        status: "Active",
        contactInfo: "healthcare@donate.org",
        division: "Healthcare",
        supportDivision: [
            {
                name: "Healthcare Access",
                description: "Ensure medical services reach rural and underserved populations."
            }
        ]
    },
    {
        id: 3,
        title: "Clean Water for Communities",
        image: "https://images.pexels.com/photos/13613219/pexels-photo-13613219.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Installing water filtration systems in villages.",
        status: "Completed",
        contactInfo: "water@donate.org",
        division: "Environment",
        supportDivision: [
            {
                name: "Water Access",
                description: "Provide clean water access in rural and underdeveloped communities."
            }
        ]
    }
];

const OurImpact = () => {
    const cardsRef = useRef([]);
    const containerRef = useRef(null);
    const [selectedDivision, setSelectedDivision] = useState(null);

    useEffect(() => {

        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'play reset play reset',
                },
            }
        );
    }, []);

    const handleViewSupportDivision = (supportDivision) => {
        setSelectedDivision(supportDivision);
    };

    const closeDivision = () => {
        setSelectedDivision(null);
    };

    return (
        <div ref={containerRef} className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-12">
            <div className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Our Impact</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">
                    With every contribution, we make a significant impact. Your generosity helps us create a better future.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="bg-white p-8 rounded-lg shadow-lg text-center"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-blue-600 mb-4">{item.title}</h3>
                        <p className="text-lg text-gray-700 mb-4">{item.description}</p>
                        <button
                            onClick={() => handleViewSupportDivision(item.supportDivision)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            View Support Division
                        </button>
                    </div>
                ))}
            </div>


            {selectedDivision && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Division Details</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {selectedDivision.map((division, index) => (
                                <li key={index} className="mb-2">
                                    <strong>{division.name}</strong>: {division.description}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={closeDivision}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurImpact;
