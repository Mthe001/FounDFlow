
import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuthContext } from '../provider/AuthProvider';

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {

        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );


        gsap.fromTo(
            imageRef.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.3)',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            }
        );


        gsap.fromTo(
            textRefs.current,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);


    const handleUpdateProfile = () => {
        navigate('/update-profile');
    };


    if (!user) {
        return <div>Loading...</div>;
    }

    const { displayName, email, photoURL } = user;

    return (
        <div className="p-6">
            <div
                ref={cardRef}
                className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-center">
                    Welcome, {displayName}!
                </h2>


                {photoURL ? (
                    <img
                        ref={imageRef}
                        src={photoURL}
                        alt={displayName}
                        className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                    />
                ) : (
                    <div
                        ref={imageRef}
                        className="w-32 h-32 bg-gray-200 rounded-full mx-auto mt-4"
                    ></div>
                )}


                <div className="mt-4 text-lg text-gray-700">
                    <p ref={(el) => (textRefs.current[0] = el)}>
                        <strong>Name:</strong> {displayName}
                    </p>
                    <p ref={(el) => (textRefs.current[1] = el)}>
                        <strong>Email:</strong> {email}
                    </p>
                </div>


                <div
                    ref={(el) => (textRefs.current[2] = el)}
                    className="mt-6 text-center"
                >
                    <button
                        onClick={handleUpdateProfile}
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
