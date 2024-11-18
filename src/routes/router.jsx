
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DonationCampaigns from '../pages/DonationCampaigns';
import HowToHelp from '../pages/HowToHelp';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../routes/PrivateRoutes';  // Correct path to your PrivateRoute
import DonationCampaignDetails from '../pages/DonationCampaignDetails';  // Import the new page
import UpdateProfile from '../components/UpdateProfile';  // Import the UpdateProfile page
import DonationForm from '../components/DonationForm';

// Define the routes
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
                path: '/donation-form',
                element: (
                    <PrivateRoute>
                        <DonationForm />
                    </PrivateRoute>
                ),
            },
            {
                path: '/how-to-help',
                element: <HowToHelp />,
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
        ],
    },
    {
        path: '*', // Wildcard route for unmatched paths
        element: <ErrorPage />,
    },
]);

export default router;
