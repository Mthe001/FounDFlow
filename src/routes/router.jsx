import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/register';
import Login from '../pages/login';
import ErrorPage from '../pages/ErrorPage';

// Components for routes (replace these placeholders with actual components if available)
const Home = () => <h1>Okk</h1>; // Home Page Component


// Define the routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />, // Use a named component for maintainability
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '*', // Wildcard route for unmatched paths
        element: <ErrorPage />,
    },
]);

export default router;
