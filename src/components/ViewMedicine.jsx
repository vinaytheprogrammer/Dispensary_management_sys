import React from 'react';

const ViewMedicine = () => {
  const exampleMedicineList = [
    {
      medicine_name: 'Paracetamol',
      dosage: '1*1',
      days: '5',
      timing: 'after_lunch',
      remarks: 'Take with water'
    },
    {
      medicine_name: 'Amoxicillin',
      dosage: '1*2',
      days: '7',
      timing: 'before_lunch',
      remarks: 'Finish the course'
    },
    {
      medicine_name: 'Ibuprofen',
      dosage: '2*1',
      days: '3',
      timing: 'after_dinner',
      remarks: 'Do not take on an empty stomach'
    }
  ];

  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Medicine List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Medicine Name</th>
            <th className="py-2 px-4 border-b">Dosage</th>
            <th className="py-2 px-4 border-b">Days</th>
            <th className="py-2 px-4 border-b">Timing</th>
            <th className="py-2 px-4 border-b">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {exampleMedicineList.map((med, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{med.medicine_name}</td>
              <td className="py-2 px-4 border-b">{med.dosage}</td>
              <td className="py-2 px-4 border-b">{med.days}</td>
              <td className="py-2 px-4 border-b">{med.timing}</td>
              <td className="py-2 px-4 border-b">{med.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewMedicine;
