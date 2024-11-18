// src/pages/Dashboard.jsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider'; // Assuming user data is in context

const Dashboard = () => {
    const { user } = useContext(AuthContext);  // Get the user info from context
    const navigate = useNavigate();

    // If the user is not loaded yet or there's no user, show a loading state
    if (!user) {
        return <div>Loading...</div>;
    }

    const { displayName, email, photoURL } = user;

    // Redirect to the profile update page
    const handleUpdateProfile = () => {
        navigate('/update-profile');
    };

    return (
        <div className="p-6">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center">Welcome, {displayName}!</h2>

                {/* User Profile Image */}
                {photoURL ? (
                    <img
                        src={photoURL}
                        alt={displayName}
                        className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
                    />
                ) : (
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mt-4"></div>
                )}

                {/* User Profile Information */}
                <div className="mt-4 text-lg text-gray-700">
                    <p><strong>Name:</strong> {displayName} </p>
                    <p><strong>Email:</strong> {email}</p>
                </div>

                {/* Update Profile Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={handleUpdateProfile}
                        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
