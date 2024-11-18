import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRefs = useRef([]);
    const cardRefs = useRef([]);
    const headingRefs = useRef([]);

    useEffect(() => {
        // Animation for headings
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
                        toggleActions: 'play reset play reset', // Re-trigger animations
                        once: false, // Allow animations to repeat
                    },
                }
            );
        });

        // Animation for sections
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
                        once: false,
                    },
                }
            );
        });

        // Staggered animation for contribution cards
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play reset play reset',
                        once: false,
                    },
                }
            );
        });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
            <div
                ref={(el) => (headingRefs.current[0] = el)}
                className="text-center mb-12"
            >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Learn more about our mission, values, and how you can make a meaningful impact.
                </p>
            </div>

            {/* Mission Section */}
            <section
                ref={(el) => (sectionRefs.current[0] = el)}
                className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12"
            >
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
                    Our Mission
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Our website is dedicated to making a positive impact in our community and beyond. We strive to provide
                    resources, raise awareness, and create opportunities for those in need. By connecting like-minded individuals,
                    we hope to foster a culture of giving, collaboration, and support. Whether you're looking to donate, volunteer,
                    or simply spread the word, your involvement can make a difference.
                </p>
            </section>

            {/* How Users Can Contribute Section */}
            <section
                ref={(el) => (sectionRefs.current[1] = el)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
                {['Donate', 'Volunteer', 'Spread the Word', 'Fundraise'].map(
                    (action, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`${index === 0
                                ? 'bg-blue-600'
                                : index === 1
                                    ? 'bg-green-600'
                                    : index === 2
                                        ? 'bg-orange-600'
                                        : 'bg-purple-600'
                                } text-white p-8 rounded-lg shadow-lg`}
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {action}
                            </h3>
                            <p className="text-lg">
                                {index === 0
                                    ? 'Your financial support helps us fund essential programs and initiatives, directly impacting those who need it most.'
                                    : index === 1
                                        ? 'Join our team of volunteers and actively participate in events and activities that make a real difference in the community.'
                                        : index === 2
                                            ? 'Help raise awareness by sharing our message with friends, family, and on social media to help us reach more people.'
                                            : 'Host a fundraising event or campaign to help us reach our goals. Every little bit helps, and your efforts go a long way.'}
                            </p>
                        </div>
                    )
                )}
            </section>

            {/* Final Call to Action */}
            <section
                ref={(el) => (sectionRefs.current[2] = el)}
                className="text-center mt-12"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                    Get Involved
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    No matter how big or small, your contribution matters. Together, we can create lasting change.
                </p>
                <Link
                    to="/how-to-help"
                    className="bg-blue-600 text-white text-xl py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    Learn More
                </Link>
            </section>
        </div>
    );
};

export default About;
