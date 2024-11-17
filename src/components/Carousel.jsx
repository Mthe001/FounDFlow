import React, { useState, useEffect } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';

// Custom CSS for Embla Carousel (can be imported directly into the component)
import './embla-carousel.css'; // This should be a custom CSS file or you can copy the Embla default styles

const Carousel = () => {
    const [emblaRef, emblaApi] = EmblaCarouselReact({ loop: true }); // Enable infinite loop
    const [images] = useState([
        'https://images.pexels.com/photos/6113082/pexels-photo-6113082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://via.placeholder.com/300x200?text=Image+3',
        'https://via.placeholder.com/300x200?text=Image+4',
        'https://via.placeholder.com/300x200?text=Image+5',
    ]);

    // Auto-scroll functionality
    useEffect(() => {
        if (emblaApi) {
            const interval = setInterval(() => {
                emblaApi.scrollNext(); // Scroll to the next slide
            }, 4000); // Change slide every 3 seconds

            // Cleanup interval on component unmount
            return () => clearInterval(interval);
        }
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(2000); // Scroll to the first slide on initial render
        }
    }, [emblaApi]);

    return (
        <div className="max-w-4xl mx-auto py-8 h-[50%]">
            <div className="embla " ref={emblaRef}>
                <div className="embla__container h-[250px]  md:h-[450px] lg:h-[480px] flex space-x-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
