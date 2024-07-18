// src/pages/Inventory.jsx
import React, { useState, useEffect } from 'react';

const Inventory = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        // Simulated fetch data from an API endpoint
        const fetchMedicines = async () => {
            try {
                const response = await fetch('/api/medicines'); // Adjust the endpoint according to your API
                if (response.ok) {
                    const data = await response.json();
                    setMedicines(data); // Assuming data is an array of medicine objects
                } else {
                    console.error('Failed to fetch medicines');
                }
            } catch (error) {
                console.error('Error fetching medicines:', error);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center">Available Medicines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {medicines.map((medicine, index) => (
                    <div key={index} className="border border-gray-300 p-4 rounded">
                        <h3 className="text-xl mb-2">{medicine.medicineName}</h3>
                        <p><strong>Batch No.:</strong> {medicine.batchNo}</p>
                        <p><strong>Mfg Date:</strong> {medicine.mfgDate}</p>
                        <p><strong>Expiry Date:</strong> {medicine.expiryDate}</p>
                        <p><strong>Quantity:</strong> {medicine.quantity}</p>
                        <p><strong>Description:</strong> {medicine.description}</p>
                        <p><strong>Supplier:</strong> {medicine.supplier}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Inventory;
