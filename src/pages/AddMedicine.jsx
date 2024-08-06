import React, { useState } from "react";
import axios from "axios";

const AddMedicine = () => {
  const [formData, setFormData] = useState({
    M_name: "",
    batch_no: "",
    expiry: "",
    b_quantity: "",
    remark: "",
    brand_name: "",
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
    // Use Axios to send a POST request
    const data = {
      M_name: formData.M_name,
      batch_no: formData.batch_no,
      expiry: formData.expiry,
      b_quantity: Number(formData.b_quantity), // Ensure this is a number
      Remarks: formData.remark,
      brand_name: formData.brand_name,
    };

    axios
      .post("http://localhost:3000/api/staff/stock_entry", data)
      .then((response) => {
        console.log("Medicine added successfully:", response.data);

        // Optionally clear the form or show a success message
        setFormData({
          M_name: "",
          batch_no: "",
          expiry: "",
          b_quantity: "",
          remark: "",
          brand_name: "",
        });
      })
      .catch((error) => {
        console.error("Error adding medicine:", error);
        // Handle error case (e.g., show an error message to the user)
      });
  };

  return (
    <main className="p-8 font-medium">
      <h2 className="text-3xl mb-4 text-center font-semibold">
        Add Medicine to Inventory
      </h2>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="M_name" className="block text-lg mb-2">
              Medicine Name:
            </label>
            <input
              type="text"
              id="M_name"
              name="M_name"
              value={formData.M_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="batch_no" className="block text-lg mb-2">
              Batch No.:
            </label>
            <input
              type="text"
              id="batch_no"
              name="batch_no"
              value={formData.batch_no}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-lg mb-2">
              Expiry Date:
            </label>
            <input
              type="date"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="b_quantity" className="block text-lg mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="b_quantity"
              name="b_quantity"
              value={formData.b_quantity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remark" className="block text-lg mb-2">
              Description:
            </label>
            <textarea
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="brand_name" className="block text-lg mb-2">
              Supplier:
            </label>
            <input
              type="text"
              id="brand_name"
              name="brand_name"
              value={formData.brand_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-2 rounded mt-4"
          onClick={handleSubmit}
        >
          Add Medicine
        </button>
      </form>
    </main>
  );
};

export default AddMedicine;
