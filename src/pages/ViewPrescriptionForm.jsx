import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewPrescriptionForm = ({ userRole }) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { userID, name, dob, gender, contactNo, height, weight, bodyTemperature, bloodPressure, bloodGroup, spo2, reasonForVisit, symptoms, clinicalFindings, advice, prescription = [], remarks } = state || {};

    const [formData, setFormData] = useState({
        symptoms: symptoms || '',
        clinicalFindings: clinicalFindings || '',
        advice: advice || '',
        remarks: remarks || '',
    });

    const [medicineQueue, setMedicineQueue] = useState(prescription);
    const [medicineStatus, setMedicineStatus] = useState(medicineQueue.map(() => 'provided'));

    useEffect(() => {
        if (state) {
            const { symptoms, clinicalFindings, advice, remarks } = state;
            setFormData({
                symptoms: symptoms || '',
                clinicalFindings: clinicalFindings || '',
                advice: advice || '',
                remarks: remarks || '',
            });
        }
    }, [state]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleStatusChange = (index, status) => {
        const updatedStatus = [...medicineStatus];
        updatedStatus[index] = status;
        setMedicineStatus(updatedStatus);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center">View Prescription</h2>
            <form className="space-y-4">
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Patient Details</h3>
                    <p><strong>ID:</strong> {userID}</p>
                    {userRole !== 'staff' && (
                        <>
                            <p><strong>Name:</strong> {name}</p>
                            {/* <p><strong>Date of Birth:</strong> {dob}</p> */}
                            <p><strong>Gender:</strong> {gender}</p>
                            {/* <p><strong>Contact No:</strong> {contactNo}</p>
                            <p><strong>Height:</strong> {height}</p>
                            <p><strong>Weight:</strong> {weight}</p>
                            <p><strong>Body Temperature:</strong> {bodyTemperature}</p>
                            <p><strong>Blood Pressure:</strong> {bloodPressure}</p>
                            <p><strong>Blood Group:</strong> {bloodGroup}</p>
                            <p><strong>SPO2:</strong> {spo2}</p> */}
                            <p><strong>Reason for Visit:</strong> {reasonForVisit}</p>
                        </>
                    )}
                </div>
                {/* <div>
                    <label className="block text-lg">Symptoms:</label>
                    <textarea name="symptoms" value={formData.symptoms} readOnly={userRole === 'staff'} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div> */}
                <div>
                    <label className="block text-lg">Clinical Findings:</label>
                    <textarea name="clinicalFindings" value={formData.clinicalFindings} readOnly={userRole === 'staff'} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div>
                    <label className="block text-lg">Advice:</label>
                    <textarea name="advice" value={formData.advice} readOnly={userRole === 'staff'} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Prescription</h3>
                    {medicineQueue.map((medicine, index) => (
                        <div key={index} className="flex space-x-2 border border-gray-300 p-2 rounded mt-2">
                            <p><strong>Name:</strong> {medicine.name}</p>
                            <p><strong>Dosage:</strong> {medicine.dosage}</p>
                            <p><strong>Timings:</strong> {medicine.timings}</p>
                            <p><strong>Days:</strong> {medicine.days}</p>
                            <p><strong>Remarks:</strong> {medicine.remarks}</p>
                            {userRole === 'staff' && (
                                <select value={medicineStatus[index]} onChange={(e) => handleStatusChange(index, e.target.value)} className="p-2 border border-gray-300 rounded">
                                    <option value="provided">Provided</option>
                                    <option value="outOfStock">Out of Stock</option>
                                </select>
                            )}
                        </div>
                    ))}
                </div>
                {medicineStatus.includes('outOfStock') && (
                    <button type="button" onClick={handlePrint} className="bg-blue-900 text-white px-4 py-2 rounded">Print Prescription</button>
                )}
                <button type="button" onClick={() => navigate('/admin/all-appointments')} className="bg-blue-900 text-white px-4 py-2 rounded">Close</button>
            </form>
        </main>
    );
};

export default ViewPrescriptionForm;
