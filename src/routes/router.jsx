
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DonationCampaigns from '../pages/DonationCampaigns';
import HowToHelp from '../pages/HowToHelp';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/login';
import ErrorPage from '../pages/ErrorPage';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../routes/PrivateRoutes';
import DonationCampaignDetails from '../pages/DonationCampaignDetails';
import UpdateProfile from '../components/UpdateProfile';
import ForgetPassword from '../pages/ForgetPassword';
import OurMisstion from '../pages/OurMisstion';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/donation-campaigns',
                element: (
                    <PrivateRoute>
                        <DonationCampaigns />
                    </PrivateRoute>
                ),
            },
            {
                path: '/donation-campaigns/:id',
                element: (
                    <PrivateRoute>
                        <DonationCampaignDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: '/how-to-help',
                element: <HowToHelp />,
            },
            {
                path: '/our-focus',
                element: <OurMisstion />,
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            // Add Update Profile Route
            {
                path: '/update-profile',
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />,
            },
            {
                path: '/auth/register',
                element: <Register />,
            },
            {
                path: '/auth/forget-password',
                element: <ForgetPassword />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
