import React, { useState, useEffect } from 'react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    userId: '', // Set to empty initially
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/user-details', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setFormData((prevFormData) => ({
              ...prevFormData,
              userId: data.user.user_id, // Adjust based on response structure
            }));
          } else {
            console.error('Error fetching user details:', data.message);
          }
        } else {
          console.error('Failed to fetch user details. Status:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include credentials (cookies)
        body: JSON.stringify({
          userId: formData.userId,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Password changed successfully");
        setFormData({
          userId: '', // Clear userId after submission
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while changing the password");
    }
  };

  return (
    <main className="p-8 font-medium">
      <h2 className="text-3xl mb-4 text-center font-semibold">Change Password</h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-5xl">
        <div className="mb-4">
          <label htmlFor="userId" className="block text-lg mb-2">User ID:</label>
          <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="oldPassword" className="block text-lg mb-2">Old Password:</label>
          <input type="password" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={handleInputChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
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
