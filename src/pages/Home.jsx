import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import OurImpact from '../components/OurImpact';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>


            <Header />


            <section>
                <HowItWorks />
            </section>


            <section>
                <OurImpact />
            </section>


            <section>
                <Testimonials />
            </section>


            <section>
                <About />
            </section>
        </div>
    );
};

export default Home;