import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleForgotPassword = () => {
        alert("Forgot password functionality goes here.");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login functionality goes here.");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0121 12c0-5.523-4.477-10-10-10S1 6.477 1 12c0 2.647 1.017 5.063 2.675 6.825m7.2-7.2a3 3 0 11-4.25 4.25M15.75 9.75l3-3m-3 3l-3-3m9 9l-3-3m3 3l-3 3" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12c0 3.866-3.582 7-8 7m16-3c-1.992 2.632-6.448 3-9 0m-6.707-.707A12.011 12.011 0 0112 2c6.627 0 12 5.373 12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
