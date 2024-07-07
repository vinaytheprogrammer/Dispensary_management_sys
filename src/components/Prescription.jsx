import React, { useState } from 'react';
import QueueMedicine from './QueueMedicine';
// import MedicineForm from './MedicineForm';

const Prescription = ({ handleChange }) => (
  <>
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Patient Information</h1>
      <input className="border p-2 mb-2 w-full" type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="gender" placeholder="Gender" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="user_id" placeholder="User ID" onChange={handleChange} required />
      <input className="border p-2 mb-2 w-full" type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="purposeForComing" placeholder="Purpose for Coming" onChange={handleChange} />

      <h3 className="text-lg font-bold mb-2">Prescription</h3>
      <input className="border p-2 mb-2 w-full" type="text" name="clinicalFinding" placeholder="Clinical Finding" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="investigation" placeholder="Investigation" onChange={handleChange} />
      <MedicineForm />
      <input className="border p-2 mb-2 w-full" type="text" name="remarks" placeholder="Remarks" onChange={handleChange} />

      <h3 className="text-lg font-bold mb-2">Vitals</h3>
      <input className="border p-2 mb-2 w-full" type="text" name="height" placeholder="Height" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="weight" placeholder="Weight" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="bodyTemp" placeholder="Body Temperature" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="bp" placeholder="Blood Pressure" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="spo2" placeholder="SpO2" onChange={handleChange} />

      <button className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600">Send to Staff</button>
    </div>
  </>
);

const MedicineForm = () => {
  const [medicine, setMedicine] = useState({
    medicine_name: '',
    dosage: '1*1',
    days: '',
    timing: 'after_lunch',
    remarks: ''
  });

  const [medicineList, setMedicineList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const handleAddMedicine = () => {
    setMedicineList([...medicineList, medicine]);
    setMedicine({
      medicine_name: '',
      dosage: '1*1',
      days: '',
      timing: 'after_lunch',
      remarks: ''
    });
  };

  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold mb-4 text-center">Add Medicines</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="medicine_name" className="block text-sm font-medium text-gray-700">Medicine Name:</label>
          <input
            type="text"
            id="medicine_name"
            name="medicine_name"
            value={medicine.medicine_name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dosage" className="block text-sm font-medium text-gray-700">Dosage:</label>
          <select
            id="dosage"
            name="dosage"
            value={medicine.dosage}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="1*1">1*1</option>
            <option value="1*2">1*2</option>
            <option value="1*3">1*3</option>
            <option value="2*2">2*2</option>
            <option value="2*1">2*1</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="days" className="block text-sm font-medium text-gray-700">Days:</label>
          <input
            type="number"
            id="days"
            name="days"
            value={medicine.days}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="timing" className="block text-sm font-medium text-gray-700">Timing:</label>
          <select
            id="timing"
            name="timing"
            value={medicine.timing}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="after_lunch">After Lunch</option>
            <option value="before_lunch">Before Lunch</option>
            <option value="after_dinner">After Dinner</option>
            <option value="before_dinner">Before Dinner</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">Remarks/ Advise:</label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            value={medicine.remarks}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="button"
          onClick={handleAddMedicine}
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Medicine
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6 mb-4 text-center">Medicine Queue</h2>
      <ul className="space-y-2">
        {medicineList.map((med, index) => (
          <li key={index} className="p-4 bg-white rounded-md shadow-sm border border-gray-200">
            <strong>Medicine Name:</strong> {med.medicine_name}, <strong>Dosage:</strong> {med.dosage}, <strong>Days:</strong> {med.days}, <strong>Timing:</strong> {med.timing}, <strong>Remarks:</strong> {med.remarks}
          </li>
        ))}
      </ul>
    </div>
  );
};




//  return <MedicineForm />;

export default Prescription;
