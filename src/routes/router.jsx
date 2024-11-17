
// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home';
// import DonationCampaigns from '../pages/DonationCampaigns';
// import HowToHelp from '../pages/HowToHelp';
// import Dashboard from '../pages/Dashboard';
// import Register from '../pages/register';
// import Login from '../pages/login';
// import ErrorPage from '../pages/ErrorPage';
// import HomeLayout from '../layouts/HomeLayout';
// import AuthLayout from '../layouts/AuthLayout';
// import PrivateRoute from '../routes/PrivateRoutes';

// // Define the routes
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HomeLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />,
//             },
//             {
//                 path: '/donation-campaigns',
//                 element: <DonationCampaigns />,
//             },
//             {
//                 path: '/how-to-help',
//                 element: <HowToHelp />,
//             },
//             // Protect the Dashboard route using PrivateRoute
//             {
//                 path: '/dashboard',
//                 element: (
//                     <PrivateRoute>
//                         <Dashboard />
//                     </PrivateRoute>
//                 ),
//             },
//         ],
//     },
//     {
//         path: '/auth',
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: '/auth/login',
//                 element: <Login />,
//             },
//             {
//                 path: '/auth/register',
//                 element: <Register />,
//             },
//         ],
//     },
//     {
//         path: '*', // Wildcard route for unmatched paths
//         element: <ErrorPage />,
//     },
// ]);

// export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import DonationCampaigns from '../pages/DonationCampaigns';
import HowToHelp from '../pages/HowToHelp';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/register';
import Login from '../pages/login';
import ErrorPage from '../pages/ErrorPage';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../routes/PrivateRoutes'; // Correct path to your PrivateRoute

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
            // Make the Donation Campaigns route private by wrapping it with PrivateRoute
            {
                path: '/donation-campaigns',
                element: (
                    <PrivateRoute>
                        <DonationCampaigns />
                    </PrivateRoute>
                ),
            },
            {
                path: '/how-to-help',
                element: <HowToHelp />,
            },
            // Protect the Dashboard route using PrivateRoute
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
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
