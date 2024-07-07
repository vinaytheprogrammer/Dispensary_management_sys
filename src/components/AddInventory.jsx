import React, { useState } from 'react';

const AddInventory = () => {
  const [formFields, setFormFields] = useState({
    medicine_name: '',
    batches: [{ batch_no: '', expiry_month: '', expiry_year: '', quantity: '' }],
    brand_name: '',
    remarks: '',
    type: 'tablet', // default type value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleBatchChange = (index, e) => {
    const { name, value } = e.target;
    const batches = [...formFields.batches];
    batches[index][name] = value;
    setFormFields((prevFields) => ({
      ...prevFields,
      batches,
    }));
  };

  const addBatch = () => {
    setFormFields((prevFields) => ({
      ...prevFields,
      batches: [...prevFields.batches, { batch_no: '', expiry_month: '', expiry_year: '', quantity: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formFields);
    // Add logic to submit form data to backend
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Medicine Inventory Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="medicine_name" className="block mb-2">Medicine Name:</label>
          <input
            type="text"
            id="medicine_name"
            name="medicine_name"
            value={formFields.medicine_name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        {formFields.batches.map((batch, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Batch {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`batch_no_${index}`} className="block mb-1">Batch No:</label>
                <input
                  type="text"
                  id={`batch_no_${index}`}
                  name="batch_no"
                  value={batch.batch_no}
                  onChange={(e) => handleBatchChange(index, e)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor={`expiry_month_${index}`} className="block mb-1">Expiry Month:</label>
                <input
                  type="number"
                  id={`expiry_month_${index}`}
                  name="expiry_month"
                  value={batch.expiry_month}
                  onChange={(e) => handleBatchChange(index, e)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor={`expiry_year_${index}`} className="block mb-1">Expiry Year:</label>
                <input
                  type="number"
                  id={`expiry_year_${index}`}
                  name="expiry_year"
                  value={batch.expiry_year}
                  onChange={(e) => handleBatchChange(index, e)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor={`quantity_${index}`} className="block mb-1">Quantity:</label>
                <input
                  type="number"
                  id={`quantity_${index}`}
                  name="quantity"
                  value={batch.quantity}
                  onChange={(e) => handleBatchChange(index, e)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mb-4">
          <button
            type="button"
            onClick={addBatch}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Batch
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="brand_name" className="block mb-2">Brand Name:</label>
          <input
            type="text"
            id="brand_name"
            name="brand_name"
            value={formFields.brand_name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remarks" className="block mb-2">Remarks:</label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            value={formFields.remarks}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2">Type:</label>
          <select
            id="type"
            name="type"
            value={formFields.type}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="tablet">Tablet</option>
            <option value="capsule">Capsule</option>
            <option value="syrup">Syrup</option>
            <option value="injection">Injection</option>
            <option value="gel">Gel</option>
            <option value="powder">Powder</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
