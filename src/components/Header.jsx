import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <header className="w-full bg-white p-8 top-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex justify-center w-full md:w-auto">
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="max-h-25 ml"
                        />
                    </Link>
                </div>
                <div className="flex flex-col items-center w-full ml:auto text-center my-4 md:my-0 custom-margin-md">
                    <h2 className="text-[#274187] text-2xl md:text-3xl font-bold leading-none">राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर</h2>
                    <h1 className="text-[#274187] text-2xl md:text-3xl font-bold mt-2">National Institute of Technology Jamshedpur</h1>
                </div>
                <nav className="ml-auto">
                    <ul className="flex gap-6 list-none m-0 p-0 text-[#274187]">
                        <li><Link to="/" className="hover:underline text-xl font-semibold">Home</Link></li>
                        {isAuthenticated ? (
                            <>
                                <li><Link to="/admin" className="hover:underline text-xl font-semibold">Admin</Link></li>
                                <li className="relative group">
                                    <img src="/user-profile-icon.png" alt="User" className="h-8 w-8 rounded-full cursor-pointer" />
                                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <div className="px-4 py-2 border-b border-gray-200">
                                            <span className="block font-medium">{user.name}</span>
                                            <span className="block text-sm text-gray-500">{user.email}</span>
                                        </div>
                                        <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <li><Link to="/login" className="hover:underline text-xl font-semibold">Login</Link></li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
