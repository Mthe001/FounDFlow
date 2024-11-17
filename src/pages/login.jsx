

import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa"; // Google icon
import { toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const Login = () => {
    const { signIn, signInWithGoogle, sendPasswordReset, user, loading } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();  // Hook for navigation

    // Wait for user to be loaded
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(email, password);
            toast.success("Login successful!");
        } catch (error) {
            setError(error.message);  // Set error message on failed login
            toast.error(error.message);  // Show toast with error message
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();  // Sign in with Google
            toast.success("Google Sign-In successful!");  // Show success toast
        } catch (error) {
            setError(error.message);  // Set error message if Google sign-in fails
            toast.error(error.message);  // Show toast with error message
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            toast.error("Please enter your email first.");
            return;
        }
        try {
            await sendPasswordReset(email);  // Send password reset email
            toast.success("Password reset email sent!");
        } catch (error) {
            toast.error(error.message);  // Show toast on error
        }
    };

    // Show loading indicator if user is being authenticated
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <div className="mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full text-gray-700 hover:text-white hover:bg-blue-500 border-gray-300"
                    >
                        <FaGoogle className="h-5 w-5 mr-2" /> Sign In with Google
                    </button>
                </div>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? <Link to="/auth/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
                <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="mt-4 text-sm text-blue-500 hover:underline"
                >
                    Forgot Password?
                </button>
            </div>
        </div>
    );
};

export default Login;
