// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassword, setForgotPassword] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (forgotPassword) {
            // Handle password reset logic here
            console.log({ userType, userId, otp, newPassword, confirmNewPassword });
            setForgotPassword(false); // Reset forgot password state after successful reset
            setPassword(''); // Clear password field
            setOtp('');
            setNewPassword('');
            setConfirmNewPassword('');
        } else {
            // Perform authentication here
            // Assuming authentication is successful
            const userData = { userType, userId, name: 'User Name', email: 'user@example.com' }; // Example user data
            login(userData);

            if (userType === 'admin') {
                navigate('/admin');
            } else if (userType === 'doctor') {
                navigate('/doctor');
            } else if (userType === 'staff') {
                navigate('/staff');
            }
        }
    };

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="userType" className="block text-lg mb-2">User Type:</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    >
                        <option value="">Select User Type</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-lg mb-2">User ID:</label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-lg mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {!forgotPassword && (
                        <button
                            type="button"
                            onClick={() => setForgotPassword(true)}
                            className="text-sm text-blue-900 absolute right-0 bottom-0 mr-2 mb-1"
                        >
                            Forgot Password
                        </button>
                    )}
                </div>
                {forgotPassword && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="otp" className="block text-lg mb-2">OTP:</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-lg mb-2">New Password:</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmNewPassword" className="block text-lg mb-2">Confirm New Password:</label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white p-2 rounded"
                        >
                            Reset Password
                        </button>
                    </>
                )}
                {!forgotPassword && (
                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white p-2 rounded"
                    >
                        Login
                    </button>
                )}
            </form>
        </main>
    );
};

export default Login;
