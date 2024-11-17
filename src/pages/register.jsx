import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoURL.value;

        if (!acceptTerms) {
            toast.error("You must accept the terms and conditions to register.");
            return;
        }

        toast.success("Registration successful!");
        console.log(name, email, password, photoUrl);
        // Proceed with form submission or further logic here
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photoURL"
                            name="photoURL"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13.875 18.825A10.05 10.05 0 0121 12c0-5.523-4.477-10-10-10S1 6.477 1 12c0 2.647 1.017 5.063 2.675 6.825m7.2-7.2a3 3 0 11-4.25 4.25M15.75 9.75l3-3m-3 3l-3-3m9 9l-3-3m3 3l-3 3"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12c0 3.866-3.582 7-8 7m16-3c-1.992 2.632-6.448 3-9 0m-6.707-.707A12.011 12.011 0 0112 2c6.627 0 12 5.373 12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                checked={acceptTerms}
                                onChange={() => setAcceptTerms(!acceptTerms)}
                            />
                            <span className="text-sm text-gray-700">
                                I accept the{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    terms and conditions
                                </a>
                            </span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
