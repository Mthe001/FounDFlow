import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout-components/Navbar'; // Import Navbar component
import Footer from '../pages/Footer';

const AuthLayout = () => {
    return (
        <div className="auth-layout">

            <Navbar />


            <main className="auth-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AuthLayout;
