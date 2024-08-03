import React, { useState } from 'react';

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        userId: '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        otp: '',
    });
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the logic to change the password here
        console.log(formData);
        // Reset the form after submission
        setFormData({
            userId: '',
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            otp: '',
        });
        setShowForgotPassword(false);
    };

    return (
        <main className="p-8 font-medium">
            <h2 className="text-3xl mb-4 text-center font-semibold">Change Password</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                {/* <div className="mb-4">
                    <label htmlFor="userId" className="block text-lg mb-2">User ID:</label>
                    <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div> */}
                <div className="mb-4 relative">
                    <label htmlFor="oldPassword" className="block text-lg mb-2">Old Password:</label>
                    <input type="password" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
                    <button type="button" onClick={() => setShowForgotPassword(true)} className="text-sm text-blue-900 absolute right-0 bottom-0 mr-2 mb-1">Forgot Password</button>
                </div>
                {showForgotPassword && (
                    <div className="mb-4">
                        <label htmlFor="otp" className="block text-lg mb-2">OTP:</label>
                        <input type="text" id="otp" name="otp" value={formData.otp} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                )}
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-lg mb-2">New Password:</label>
                    <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmNewPassword" className="block text-lg mb-2">Confirm New Password:</label>
                    <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">Change Password</button>
            </form>
        </main>
    );
};

export default ChangePassword;
