import React from 'react';

const OurImpact = () => {
    return (
        <div className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-12">
            <div className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Our Impact</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">
                    With every contribution, we make a significant impact. Your generosity helps us create a better future.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Impact Card 1 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-semibold text-blue-600 mb-4">500+ Donations</h3>
                    <p className="text-lg text-gray-700">
                        We’ve received over 500 donations, providing direct aid to families and communities in need.
                    </p>
                </div>

                {/* Impact Card 2 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-semibold text-green-600 mb-4">$200,000 Raised</h3>
                    <p className="text-lg text-gray-700">
                        Through your generous donations, we’ve raised over $200,000 to support critical health initiatives.
                    </p>
                </div>

                {/* Impact Card 3 */}
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-semibold text-yellow-600 mb-4">50+ Volunteers</h3>
                    <p className="text-lg text-gray-700">
                        More than 50 volunteers have helped organize and distribute resources, ensuring that aid reaches those in need.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurImpact;
