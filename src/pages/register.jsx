
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState("");
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;


    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoURL.value;

        if (!acceptTerms) {
            toast.error("You must accept the terms and conditions to register.");
            return;
        }


        if (!passwordValidationRegex.test(password)) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and one number, and be at least 8 characters long."
            );
            return;
        }

        try {

            await signUp(email, password, name, photoUrl);
            toast.success("Registration successful!");



            navigate("/");
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        }
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
                            onFocus={() => setIsFocused(true)}
                        />
                        {/* Eye Icon - Only shows when input is focused */}
                        {isFocused && (
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <FiEyeOff className="h-5 w-5" />
                                ) : (
                                    <FiEye className="h-5 w-5" />
                                )}
                            </button>
                        )}
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
                    <Link to="/auth/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
