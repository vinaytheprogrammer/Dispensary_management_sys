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
        <main className="p-8 ">
            <h2 className="text-3xl mb-4 text-center font-semibold">Available Medicines</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Medicine Name</th>
                            <th className="px-4 py-2 border-b">Batch No.</th>
                            <th className="px-4 py-2 border-b">Mfg Date</th>
                            <th className="px-4 py-2 border-b">Expiry Date</th>
                            <th className="px-4 py-2 border-b">Quantity</th>
                            <th className="px-4 py-2 border-b">Description</th>
                            <th className="px-4 py-2 border-b">Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map((medicine, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border-b">{medicine.medicineName}</td>
                                <td className="px-4 py-2 border-b">{medicine.batchNo}</td>
                                <td className="px-4 py-2 border-b">{medicine.mfgDate}</td>
                                <td className="px-4 py-2 border-b">{medicine.expiryDate}</td>
                                <td className="px-4 py-2 border-b">{medicine.quantity}</td>
                                <td className="px-4 py-2 border-b">{medicine.description}</td>
                                <td className="px-4 py-2 border-b">{medicine.supplier}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Inventory;
