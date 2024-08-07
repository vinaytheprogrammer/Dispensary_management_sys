// src/pages/DeductMedicine.jsx
import React, { useState } from "react";

const DeductMedicine = () => {
  const [formData, setFormData] = useState({
    medicineName: "",
    quantity: "",
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
    <main className="p-8 font-medium">
      <h2 className="text-3xl mb-4 text-center font-semibold">
        Deduct Medicine from Inventory
      </h2>
      <form onSubmit={handleSubmit} className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="medicineName" className="block text-lg mb-2">
              Medicine Name:
            </label>
            <input
              type="text"
              id="medicineName"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-lg mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-2 rounded"
        >
          Deduct Medicine
        </button>
      </form>
    </main>
  );
};

export default DeductMedicine;
