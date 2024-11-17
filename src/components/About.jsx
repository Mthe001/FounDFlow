import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
                <p className="text-lg sm:text-xl text-gray-600">
                    Learn more about our mission, values, and how you can make a meaningful impact.
                </p>
            </div>

            {/* Mission Section */}
            <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Our website is dedicated to making a positive impact in our community and beyond. We strive to provide
                    resources, raise awareness, and create opportunities for those in need. By connecting like-minded individuals,
                    we hope to foster a culture of giving, collaboration, and support. Whether you're looking to donate, volunteer,
                    or simply spread the word, your involvement can make a difference.
                </p>
            </section>

            {/* How Users Can Contribute Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Donate</h3>
                    <p className="text-lg">
                        Your financial support helps us fund essential programs and initiatives, directly impacting those who need it most.
                    </p>
                </div>
                <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
                    <p className="text-lg">
                        Join our team of volunteers and actively participate in events and activities that make a real difference in the community.
                    </p>
                </div>
                <div className="bg-orange-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Spread the Word</h3>
                    <p className="text-lg">
                        Help raise awareness by sharing our message with friends, family, and on social media to help us reach more people.
                    </p>
                </div>
                <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Fundraise</h3>
                    <p className="text-lg">
                        Host a fundraising event or campaign to help us reach our goals. Every little bit helps, and your efforts go a long way.
                    </p>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="text-center mt-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Get Involved</h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-8">
                    No matter how big or small, your contribution matters. Together, we can create lasting change.
                </p>
                <Link to="/how-to-help" className="bg-blue-600 text-white text-xl py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Learn More
                </Link>
            </section>
        </div>
    );
};

export default About;
