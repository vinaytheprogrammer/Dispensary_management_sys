import React, { useState } from 'react';

const ViewInventory = () => {
  // Example inventory data (replace with actual data or fetch from backend)
  const [inventoryData, setInventoryData] = useState([
    {
      date: '2024-07-08',
      medicine_name: 'Paracetamol',
      quantity: 100,
      batch_no: 'P2024-001',
      expiry_month: 12,
      expiry_year: 2025,
    },
    {
      date: '2024-07-08',
      medicine_name: 'Ibuprofen',
      quantity: 50,
      batch_no: 'I2024-002',
      expiry_month: 10,
      expiry_year: 2024,
    },
    {
      date: '2024-07-08',
      medicine_name: 'Omeprazole',
      quantity: 30,
      batch_no: 'O2024-003',
      expiry_month: 9,
      expiry_year: 2023,
    },
  ]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">View Inventory</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="text-left py-2 px-4">Date</th>
              <th className="text-left py-2 px-4">Medicine Name</th>
              <th className="text-left py-2 px-4">Quantity</th>
              <th className="text-left py-2 px-4">Batch No</th>
              <th className="text-left py-2 px-4">Expiry Month</th>
              <th className="text-left py-2 px-4">Expiry Year</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">{item.medicine_name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.batch_no}</td>
                <td className="py-2 px-4">{item.expiry_month}</td>
                <td className="py-2 px-4">{item.expiry_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewInventory;
