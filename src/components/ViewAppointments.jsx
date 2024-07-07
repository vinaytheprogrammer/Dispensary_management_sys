import React from 'react';

const ViewAppointments = () => {
  // Sample appointments data
  const appointments = [
    { userId: '001', name: 'John Doe' },
    { userId: '002', name: 'Jane Smith' },
    { userId: '003', name: 'Michael Johnson' },
  ];

  const handleViewAppointment = (userId) => {
    // Handle logic to view appointment details
    console.log(`Viewing appointment for user ${userId}`);
    // You can navigate to the prescription component or show details inline
  };

  return (
    <div className="appointments-table">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
      <div className="mb-4">Current Date: {new Date().toLocaleDateString()}</div>
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 border border-gray-300">
            <th className="text-left py-2 px-4 border border-gray-300">UserID</th>
            <th className="text-left py-2 px-4 border border-gray-300">Name</th>
            <th className="text-left py-2 px-4 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.userId} className="border border-gray-300">
              <td className="py-2 px-4 border border-gray-300">{appointment.userId}</td>
              <td className="py-2 px-4 border border-gray-300">{appointment.name}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded"
                  onClick={() => handleViewAppointment(appointment.userId)}
                >
                  View Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointments;



