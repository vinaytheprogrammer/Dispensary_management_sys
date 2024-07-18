// src/pages/DeductMedicine.jsx
import React, { useState } from 'react';

const DeductMedicine = () => {
    const [formData, setFormData] = useState({
        medicineName: '',
        batchNo: '',
        mfgDate: '',
        expiryDate: '',
        quantity: '',
        patientUserId: '',
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
            <h2 className="text-3xl mb-4 text-center">Deduct Medicine from Inventory</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="medicineName" className="block text-lg mb-2">Medicine Name:</label>
                    <input type="text" id="medicineName" name="medicineName" value={formData.medicineName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="batchNo" className="block text-lg mb-2">Batch No.:</label>
                    <input type="text" id="batchNo" name="batchNo" value={formData.batchNo} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="mfgDate" className="block text-lg mb-2">Mfg Date:</label>
                    <input type="date" id="mfgDate" name="mfgDate" value={formData.mfgDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="expiryDate" className="block text-lg mb-2">Expiry Date:</label>
                    <input type="date" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-lg mb-2">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="patientUserId" className="block text-lg mb-2">Patient User ID:</label>
                    <input type="text" id="patientUserId" name="patientUserId" value={formData.patientUserId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">Deduct Medicine</button>
            </form>
        </main>
    );
};

export default DeductMedicine;
