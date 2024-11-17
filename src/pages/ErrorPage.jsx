import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500">404</h1>
                <p className="text-2xl font-bold mt-4 text-gray-800">
                    Oops! Page Not Found
                </p>
                <p className="mt-2 text-gray-600">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="btn btn-primary px-6 py-2 text-white rounded-md hover:bg-primary-focus"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
