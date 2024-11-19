import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const OurMission = () => {

    useEffect(() => {

        gsap.fromTo(".image-section",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, stagger: 0.5 });

        gsap.fromTo(".text-section",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.2, stagger: 0.5 });
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-100 to-teal-50 py-16 px-6 flex flex-col items-center">

            {/* Section 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 mb-16">

                {/* Image Section */}
                <div className="image-section flex-1 opacity-0">
                    <img
                        src="https://media.istockphoto.com/id/856564654/photo/donation-box-with-clothes.jpg?s=612x612&w=0&k=20&c=wd2TfIydgFL-K_WU40LoYtgIoE8y-N2OPA1SU_klnXY="
                        alt="Our Mission - Donation"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="text-section flex-1 text-center md:text-left opacity-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Our Mission</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        At <strong>For Humanity</strong>, we are dedicated to providing essential winter supplies to underprivileged communities.
                        Our mission is to bring warmth, comfort, and hope by distributing blankets, coats, and heating accessories.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Together, we can make sure no one has to face the harsh winter alone. Every small act of kindness brings us closer to a more compassionate world.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 mb-16">

                {/* Text Section */}
                <div className="text-section flex-1 text-center md:text-left opacity-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Why We Do It</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Winter months are particularly tough for the most vulnerable communities. By providing the necessary winter accessories, we offer them a chance to survive and thrive during the coldest months.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Your donations can truly make a difference. Join us in providing warmth to those who need it the most.
                    </p>
                </div>

                {/* Image Section */}
                <div className="image-section flex-1 opacity-0">
                    <img
                        src="https://media.istockphoto.com/id/856564654/photo/donation-box-with-clothes.jpg?s=612x612&w=0&k=20&c=wd2TfIydgFL-K_WU40LoYtgIoE8y-N2OPA1SU_klnXY="
                        alt="Why We Do It - Winter Donation"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8 mb-16">

                {/* Image Section */}
                <div className="image-section flex-1 opacity-0">
                    <img
                        src="https://media.istockphoto.com/id/856564654/photo/donation-box-with-clothes.jpg?s=612x612&w=0&k=20&c=wd2TfIydgFL-K_WU40LoYtgIoE8y-N2OPA1SU_klnXY="
                        alt="Join Us in Making a Difference"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="text-section flex-1 text-center md:text-left opacity-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Join Us in Making a Difference</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Every donation, no matter how small, has the potential to change lives. Help us spread warmth and joy to those in need during the winter season.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Together, we can ensure no one is left out in the cold. Your kindness will provide more than just warmth—it will bring hope.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OurMission;
