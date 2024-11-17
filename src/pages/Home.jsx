import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import OurImpact from '../components/OurImpact';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>

            <h1>Home</h1>
            <h1>carosel in the header perent is home</h1>
            <Header />

            {/* how it wokrs */}
            <section>
                <HowItWorks />
            </section>

            {/* out impact section */}
            <section>
                <OurImpact />
            </section>

            {/*testimonials */}
            <section>
                <Testimonials />
            </section>

            {/* about section */}
            <section>
                <About />
            </section>
        </div>
    );
};

export default Home;