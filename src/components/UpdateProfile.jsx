// src/pages/UpdateProfile.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);  // Get user and update function from context
    const navigate = useNavigate();


    const [name, setName] = useState(user.displayName || '');
    const [email, setEmail] = useState(user.email || '');
    const [image, setImage] = useState(user.photoURL || '');

    const handleSubmit = (e) => {
        e.preventDefault();


        updateUserProfile({ displayName: name, photoURL: image });


        navigate('/dashboard');
    };

    return (
        <div className="p-6">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center">Update Your Profile</h2>


                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-md"
                            required
                            disabled
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="image">
                            Profile Image URL (Optional)
                        </label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-md"
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
