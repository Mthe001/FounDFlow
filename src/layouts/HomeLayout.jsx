import React from 'react';
import Navbar from '../components/layout-components/Navbar';
import Footer from '../pages/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />

            <main>
                <Outlet />

            </main>

            <Footer />
        </div>
    );
};

export default HomeLayout;