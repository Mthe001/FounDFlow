import React from 'react';

const HowItWorks = () => {
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
                    <button className="bg-white text-blue-600 text-lg py-2 px-4 rounded-full hover:bg-blue-50 transition duration-300">
                        Donate Now
                    </button>
                </div>

                <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">2. Collection Points</h3>
                    <p className="text-lg mb-4">
                        You can drop off your donations at one of our collection points. We have multiple locations available, and we ensure they are easily accessible.
                    </p>
                    <button className="bg-white text-green-600 text-lg py-2 px-4 rounded-full hover:bg-green-50 transition duration-300">
                        Find Collection Points
                    </button>
                </div>

                <div className="bg-yellow-600 text-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">3. Supported Divisions</h3>
                    <p className="text-lg mb-4">
                        We support various causes, including healthcare, education, and environmental conservation. Your donations help fund these divisions.
                    </p>
                    <button className="bg-white text-yellow-600 text-lg py-2 px-4 rounded-full hover:bg-yellow-50 transition duration-300">
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
                <button className="bg-blue-600 text-white text-xl py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default HowItWorks;
