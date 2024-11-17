import React from 'react';

const HowToHelp = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">How You Can Help</h1>

            {/* Instructions for Donation */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Steps to Donate</h2>
                <ol className="list-decimal pl-6">
                    <li className="mb-2">Choose a campaign or division to support.</li>
                    <li className="mb-2">Select the donation amount or items you want to contribute.</li>
                    <li className="mb-2">Pick your preferred method of donation (Online, Bank Transfer, or Collection Points).</li>
                    <li className="mb-2">Fill out the donation form with your details (if required).</li>
                    <li className="mb-2">Confirm your donation and submit it. You will receive a confirmation email.</li>
                    <li className="mb-2">Track the progress of your donation on our website or through email updates.</li>
                </ol>
            </section>

            {/* Collection Points */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Donation Collection Points</h2>
                <p>If you prefer to donate in person, you can visit the following collection points:</p>
                <ul className="list-disc pl-6">
                    <li className="mb-2">Local Donation Centers (City Name)</li>
                    <li className="mb-2">Community Centers (Location Name)</li>
                    <li className="mb-2">Participating Stores (Store Name)</li>
                    <li className="mb-2">Partner Organizations (Organization Name)</li>
                </ul>
                <p>For more details on how to find a collection point near you, please contact us at <span className="font-semibold">support@donate.org</span>.</p>
            </section>

            {/* Supported Divisions */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Supported Divisions</h2>
                <p>Your donation can support various causes. Here are the divisions we currently support:</p>
                <ul className="list-disc pl-6">
                    <li className="mb-2">Education: Supporting underprivileged children with school supplies and scholarships.</li>
                    <li className="mb-2">Healthcare: Providing medical aid and healthcare services to underserved communities.</li>
                    <li className="mb-2">Environment: Promoting environmental sustainability through various eco-projects.</li>
                    <li className="mb-2">Poverty Relief: Offering food, shelter, and other basic necessities to those in need.</li>
                    <li className="mb-2">Disaster Relief: Assisting victims of natural disasters with essential resources and support.</li>
                </ul>
                <p>You can choose a specific division to donate to or support our general fund, which contributes to all divisions.</p>
            </section>
        </div>
    );
};

export default HowToHelp;
