
// import React, { useState, useContext, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "../provider/AuthProvider";
// import Loading from "./Loading";

// const Login = () => {
//     const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (user) {
//             navigate("/");
//         }
//     }, [user, navigate]);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError("");
//         try {
//             await signIn(email, password);
//             toast.success("Login successful!");
//         } catch (error) {
//             setError(error.message);
//             toast.error(error.message);
//         }
//     };

//     const handleGoogleSignIn = async () => {
//         try {
//             await signInWithGoogle();
//             toast.success("Google Sign-In successful!");
//         } catch (error) {
//             setError(error.message);
//             toast.error(error.message);
//         }
//     };

//     const redirectToForgetPassword = () => {
//         navigate("/auth/forget-password", { state: { email } });
//     };

//     if (loading) {
//         return <Loading />;
//     }

//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="input input-bordered w-full mt-1"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="input input-bordered w-full mt-1"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
//                     {error && <div className="text-red-500">{error}</div>}
//                     <button type="submit" className="btn btn-primary w-full">
//                         Login
//                     </button>
//                 </form>

//                 <div className="mt-6">
//                     <button
//                         onClick={handleGoogleSignIn}
//                         className="btn btn-outline w-full text-gray-700 hover:text-white hover:bg-blue-500 border-gray-300"
//                     >
//                         <FaGoogle className="h-5 w-5 mr-2" /> Sign In with Google
//                     </button>
//                 </div>

//                 <p className="mt-4 text-sm text-center text-gray-600">
//                     Don't have an account?{" "}
//                     <Link to="/auth/register" className="text-blue-500 hover:underline">
//                         Register
//                     </Link>
//                 </p>
//                 <button
//                     type="button"
//                     onClick={redirectToForgetPassword}
//                     className="mt-4 text-sm text-blue-500 hover:underline"
//                 >
//                     Forgot Password?
//                 </button>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default Login;



import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const Login = () => {
    const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/"); // Redirect to home page if already logged in
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        // Password match validation
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            await signIn(email, password);
            toast.success("Login successful!");
            toast.success(`Welcome back, ${user?.displayName || "User"}!`); // Display Welcome back message
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success("Google Sign-In successful!");
            toast.success(`Welcome back, ${user?.displayName || "User"}!`); // Display Welcome back message
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
        }
    };

    const redirectToForgetPassword = () => {
        navigate("/auth/forget-password", { state: { email } });
    };

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full mt-1"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password field */}
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input input-bordered w-full mt-1"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {error && <div className="text-red-500">{error}</div>}
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
                    Don't have an account?{" "}
                    <Link to="/auth/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
                <button
                    type="button"
                    onClick={redirectToForgetPassword}
                    className="mt-4 text-sm text-blue-500 hover:underline"
                >
                    Forgot Password?
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
