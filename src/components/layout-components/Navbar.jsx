

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);


    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };


    const renderUserInfo = () => {
        if (user && user.email) {

            return (
                <div className="flex items-center gap-2">
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={user.photoURL || 'https://via.placeholder.com/150'}
                        alt="User Profile"
                    />

                </div>
            );
        } else {

            return <img className="w-10 h-10 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Guest" />;
        }
    };


    const renderLoginButton = () => {
        if (isLoggedIn) {
            return (
                <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                </button>
            );
        } else {
            return (
                <NavLink to="/auth/login" className="btn btn-primary">
                    Login
                </NavLink>
            );
        }
    };

    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to="/" className="block px-4 py-2">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation-campaigns" className="block px-4 py-2">Donation Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/how-to-help" className="block px-4 py-2">How to Help</NavLink>
                        </li>
                        {user && user.email && (
                            <li>
                                <NavLink to="/dashboard" className="block px-4 py-2">Dashboard</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">For Humanity</Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li>
                        <NavLink to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation-campaigns" className="text-gray-700 hover:text-blue-500 transition duration-300">Donation Campaigns</NavLink>
                    </li>
                    <li>
                        <NavLink to="/how-to-help" className="text-gray-700 hover:text-blue-500 transition duration-300">How to Help</NavLink>
                    </li>
                    {user && user.email && (
                        <li>
                            <NavLink to="/dashboard" className="text-gray-700 hover:text-blue-500 transition duration-300">Dashboard</NavLink>
                        </li>
                    )}
                </ul>
            </div>


            <div className="navbar-end flex items-center space-x-4">
                {renderUserInfo()}
                {renderLoginButton()}
            </div>
        </div>
    );
};

export default Navbar;
