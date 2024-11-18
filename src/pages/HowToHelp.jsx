
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowToHelp = () => {
    const sectionRefs = useRef([]);
    const stepRefs = useRef([]);
    const divisionRefs = useRef([]);
    const headingRefs = useRef([]);

    useEffect(() => {

        headingRefs.current.forEach((heading) => {
            gsap.fromTo(
                heading,
                { opacity: 0, y: -30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 85%',
                        toggleActions: 'play reset play reset',
                    },
                }
            );
        });


        sectionRefs.current.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        toggleActions: 'play reset play reset',
                    },
                }
            );
        });


        gsap.fromTo(
            stepRefs.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: stepRefs.current[0]?.parentNode,
                    start: 'top 90%',
                    toggleActions: 'play reset play reset',
                },
            }
        );


        gsap.fromTo(
            divisionRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: divisionRefs.current[0]?.parentNode,
                    start: 'top 90%',
                    toggleActions: 'play reset play reset',
                },
            }
        );
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 bg-gray-50">

            <header
                ref={(el) => (headingRefs.current[0] = el)}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                    <span className="text-indigo-600">How You Can Help</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Make a difference by supporting campaigns and contributing to causes close to your heart.
                </p>
            </header>


            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="mb-16"
            >
                <h2
                    ref={(el) => (headingRefs.current[1] = el)}
                    className="text-3xl font-semibold text-gray-800 mb-6 text-center"
                >
                    Steps to Donate
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Choose a campaign or division to support.",
                        "Select the donation amount or items you want to contribute.",
                        "Pick your preferred method of donation (Online, Bank Transfer, or Collection Points).",
                        "Fill out the donation form with your details (if required).",
                        "Confirm your donation and submit it. You will receive a confirmation email.",
                        "Track the progress of your donation on our website or through email updates.",
                    ].map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => (stepRefs.current[index] = el)}
                            className="flex items-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-all"
                        >
                            <span className="text-indigo-600 text-lg font-bold mr-4">
                                {index + 1}.
                            </span>
                            <p className="text-gray-700">{step}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                className="mb-16"
            >
                <h2
                    ref={(el) => (headingRefs.current[2] = el)}
                    className="text-3xl font-semibold text-gray-800 mb-6 text-center"
                >
                    Donation Collection Points
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    If you prefer to donate in person, visit one of our collection points:
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Local Donation Centers (City Name)",
                        "Community Centers (Location Name)",
                        "Participating Stores (Store Name)",
                        "Partner Organizations (Organization Name)",
                    ].map((point, index) => (
                        <div
                            key={index}
                            className="flex items-center p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-all"
                        >
                            <p className="text-gray-700">{point}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-6 text-gray-600">
                    For more details, contact us at{" "}
                    <span className="text-indigo-600 font-semibold">
                        <a href="https://sparbd.org/winter-special/">Spar Bd</a>
                    </span>
                </p>
            </section>

            {/* Supported Divisions */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
            >
                <h2
                    ref={(el) => (headingRefs.current[3] = el)}
                    className="text-3xl font-semibold text-gray-800 mb-6 text-center"
                >
                    Supported Divisions
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Your contributions can support these essential causes:
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Education",
                            description:
                                "Supporting underprivileged children with school supplies and scholarships.",
                        },
                        {
                            title: "Healthcare",
                            description:
                                "Providing medical aid and healthcare services to underserved communities.",
                        },
                        {
                            title: "Environment",
                            description:
                                "Promoting environmental sustainability through various eco-projects.",
                        },
                        {
                            title: "Poverty Relief",
                            description:
                                "Offering food, shelter, and other basic necessities to those in need.",
                        },
                        {
                            title: "Disaster Relief",
                            description:
                                "Assisting victims of natural disasters with essential resources and support.",
                        },
                    ].map((division, index) => (
                        <div
                            key={index}
                            ref={(el) => (divisionRefs.current[index] = el)}
                            className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-bold text-indigo-600 mb-2">
                                {division.title}
                            </h3>
                            <p className="text-gray-700">{division.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-6 text-gray-600">
                    Choose a division or support our general fund to contribute across all causes.
                </p>
            </section>
        </div>
    );
};

export default HowToHelp;
