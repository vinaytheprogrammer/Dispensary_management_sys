// src/pages/RemoveAdminStaffDoctor.jsx
import React, { useState } from 'react';

const RemoveAdminStaffDoctor = () => {
    const [formData, setFormData] = useState({
        userId: '',
        remarks: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center font-semibold">Remove Admin/Staff/Doctor</h2>
            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto font-medium">
                <div className="mb-4">
                    <label htmlFor="userId" className="block text-lg mb-2">User ID:</label>
                    <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="remarks" className="block text-lg mb-2">Remarks:</label>
                    <textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">Remove User</button>
            </form>
        </main>
    );
};

export default RemoveAdminStaffDoctor;
