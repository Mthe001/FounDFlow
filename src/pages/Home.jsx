import React from 'react';
import Header from '../components/Header';
import About from '../components/About';

const Home = () => {
    return (
        <div>

            <h1>Home</h1>
            <h1>carosel in the header perent is home</h1>
            <Header />

            {/* about section */}
            <section>
                <About />

            </section>
        </div>
    );
};

export default Home;