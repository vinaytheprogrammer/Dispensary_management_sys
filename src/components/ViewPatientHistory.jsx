import React, { useState } from 'react';

const ViewPatientHistory = () => {
  const [userId, setUserId] = useState('');
  const [prescriptions, setPrescriptions] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Mock data - replace with actual backend integration
    const mockPrescriptions = [
      { date: '2024-07-10', prescriptionId: 'presc001' },
      { date: '2024-07-09', prescriptionId: 'presc002' },
      { date: '2024-07-08', prescriptionId: 'presc003' },
    ];
    setPrescriptions(mockPrescriptions);
  };

  const handleViewPrescription = (prescriptionId) => {
    // Handle logic to view prescription details
    console.log(`Viewing prescription ${prescriptionId}`);
    // Navigate to prescription component or show details inline
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">View Patient History</h2>
      <form className="mb-4" onSubmit={handleSearch}>
        <label className="block mb-2" htmlFor="userId">
          Enter UserID:
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {prescriptions.length > 0 && (
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 border border-gray-300">
              <th className="text-left py-2 px-4 border border-gray-300">Date</th>
              <th className="text-left py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.prescriptionId} className="border border-gray-300">
                <td className="py-2 px-4 border border-gray-300">{prescription.date}</td>
                <td className="py-2 px-4 border border-gray-300">
                  <button
                    className="bg-blue-500 text-white py-1 px-2 rounded"
                    onClick={() => handleViewPrescription(prescription.prescriptionId)}
                  >
                    View Prescription
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewPatientHistory;
