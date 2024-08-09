import axios from "axios";
import React, { useState, useEffect } from "react";

const Inventory = () => {
  const [medicines, setMedicines] = useState([]);

  const [showInventory, setShowInventory] = useState(false);

  const handelinventory = async (e) => {
    e.preventDefault();
    setShowInventory(!showInventory);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/staff/getstock"
      ); // Adjust the endpoint according to your API
      if (response.status === 200) {
        const data = response.data; // axios automatically parses JSON
        setMedicines(data.data); // Assuming data is an array of medicine objects
      } else {
        console.error("Failed to fetch medicines");
      }
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }

  };
  useEffect(() => {
    console.log("Updated medicines:", medicines);
  }, [medicines]);

  return (
    <main className="p-8 ">
      <h2 className="text-3xl mb-4 text-center font-semibold">
        Available Medicines
      </h2>
      <button
        onClick={handelinventory}
        className="bg-blue-900 text-white p-2 rounded mb-4"
      >
        {showInventory ? "Hide Inventory" : "Show Inventory"}
      </button>
      {showInventory && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Medicine Name</th>
                <th className="px-4 py-2 border-b">Batch No.</th>
                <th className="px-4 py-2 border-b">Medicine Type</th>
                <th className="px-4 py-2 border-b">Expiry Date</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Description</th>
                <th className="px-4 py-2 border-b">Supplier</th>
              </tr>
            </thead>

            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{medicine.M_name}</td>
                  <td className="px-4 py-2 border-b">{medicine.batch_no}</td>
                  <td className="px-4 py-2 border-b">{medicine.type}</td>
                  <td className="px-4 py-2 border-b">
                    {medicine.closestExpiryDate}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {medicine.totalQuantity}
                  </td>
                  <td className="px-4 py-2 border-b">{medicine.Remarks}</td>
                  <td className="px-4 py-2 border-b">{medicine.brand_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default Inventory;
