
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jane Doe",
            role: "Donor",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            message: "I’ve seen firsthand the difference my donations make. It's heartwarming to know that my contributions are changing lives."
        },
        {
            name: "John Smith",
            role: "Volunteer",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            message: "Volunteering for this cause has been incredibly fulfilling. I feel like I’m truly making a difference in my community."
        },
        {
            name: "Emily White",
            role: "Recipient",
            image: "https://randomuser.me/api/portraits/women/50.jpg",
            message: "Thanks to your generosity, I’ve received the help I desperately needed. I can’t express how grateful I am."
        }
    ];

    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const headingRef = useRef(null);

    useEffect(() => {
        // GSAP animation for heading
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 85%',
                    toggleActions: 'restart none none none', // Restart every time it's scrolled into view
                },
            }
        );

        // GSAP animation for cards
        cardRefs.current.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    gsap.fromTo(
                        card,
                        { opacity: 0, scale: 0.8 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            delay: index * 0.2, // Stagger effect
                            ease: 'elastic.out(1, 0.5)',
                        }
                    );
                },
                onLeaveBack: () => {
                    gsap.set(card, { opacity: 0, scale: 0.8 }); // Reset styles when scrolling back
                },
            });
        });
    }, []);

    return (
        <div ref={sectionRef} className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-12">
            <div ref={headingRef} className="max-w-screen-xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                    What Our Community Says
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">
                    Hear directly from those who have been a part of our mission and seen the change firsthand.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="bg-white p-8 rounded-lg shadow-lg text-center"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <p className="text-lg text-gray-700 italic mb-4">"{testimonial.message}"</p>
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
