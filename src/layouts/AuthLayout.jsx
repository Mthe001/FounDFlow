import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout-components/Navbar'; // Import Navbar component
import Footer from '../pages/Footer';

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            {/* Include the Navbar in AuthLayout */}
            <Navbar />

            {/* This is where the child components (Login, Register) will be rendered */}
            <main className="auth-main">
                <Outlet />
            </main>

            {/* Optionally, you can add a footer or any other layout element here */}
            <Footer />
        </div>
    );
};

export default AuthLayout;
