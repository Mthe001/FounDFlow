import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Pre-fill email from previous route if available
    useEffect(() => {
        const emailFromLogin = location.state?.email || "";
        setEmail(emailFromLogin);
    }, [location.state]);

    // Handle the reset password action
    const handleResetPassword = () => {
        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        const isValidGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
        if (!isValidGmail) {
            toast.error("Please enter a valid Gmail address.");
            return;
        }

        toast.success("Redirecting to Gmail...");
        setTimeout(() => {
            window.location.href = "https://mail.google.com";
        }, 2000);
    };

    // Handle the cancel action
    const handleCancel = () => {
        navigate("/auth/login");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full mt-1"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    onClick={handleResetPassword}
                    className="btn btn-primary w-full mb-4"
                >
                    Reset Password
                </button>
                <button
                    onClick={handleCancel}
                    className="btn btn-secondary w-full"
                >
                    Cancel
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ForgetPassword;
