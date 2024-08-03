import React, { useState } from 'react';

const AddStaffDoctor = () => {
    const [formData, setFormData] = useState({
        role: '',
        name: '',
        dob: '',
        gender: '',
        userId: '',
        password: '',
        email: '',
        contactNo: '',
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
            <h2 className="text-3xl mb-4 text-center font-semibold">Add New Doctor/Staff</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto font-medium">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-lg mb-2">Role:</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
                            <option value="">Select</option>
                            <option value="doctor">Doctor</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg mb-2">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-lg mb-2">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-lg mb-2">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-lg mb-2">User ID:</label>
                        <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-lg mb-2">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg mb-2">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNo" className="block text-lg mb-2">Contact No.:</label>
                        <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">Add {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}</button>
            </form>
        </main>
    );
};

export default AddStaffDoctor;
