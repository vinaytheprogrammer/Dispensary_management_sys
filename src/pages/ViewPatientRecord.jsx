import React, { useState } from 'react';

const ViewPatientRecord = () => {
    const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');
    const [patientRecords, setPatientRecords] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/patient-records/${userType}/${userId}`);
            if (response.ok) {
                const data = await response.json();
                setPatientRecords(data); // Assuming data structure includes visits and prescriptions
            } else {
                console.error('Failed to fetch patient records');
            }
        } catch (error) {
            console.error('Error fetching patient records:', error);
        }
    };

    return (
        <main className="p-8 font-medium">
            <h2 className="text-3xl mb-4 text-center font-semibold">View Patient Records</h2>
            <div className="mb-4">
                <label htmlFor="userType" className="block text-lg mb-2">Select User Type:</label>
                <select
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Select User Type</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                    <option value="dependent">Dependent</option>
                </select>
            </div>
            {userType && (
                <>
                    <div className="mb-4 ">
                        <label htmlFor="userId" className="block text-lg mb-2">Enter User ID:</label>
                        <input
                            type="text"
                            id="userId"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button onClick={handleSearch} className="bg-blue-900 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </>
            )}

            {patientRecords.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-2xl mb-4">Patient Visits and Prescriptions</h3>
                    {patientRecords.map((record, index) => (
                        <div key={index} className="mb-4 border border-gray-300 p-4">
                            <h4 className="text-xl mb-2">Visit {index + 1}</h4>
                            <p><strong>Doctor:</strong> {record.doctorName}</p>
                            <p><strong>Date:</strong> {record.date}</p>

                            <p><strong>Clinical Findings:</strong> {record.clinicalFindings}</p>
                            <p><strong>Advice:</strong> {record.advice}</p>
                            <p><strong>Prescription:</strong> {record.prescription}</p>
                            {/* Add more details as per your data structure */}
                        </div>
                    ))}
                </div>
            )}

            {patientRecords.length === 0 && userId && (
                <p className="text-center mt-8 text-lg">No records found for User ID: {userId}</p>
            )}
        </main>
    );
};

export default ViewPatientRecord;
