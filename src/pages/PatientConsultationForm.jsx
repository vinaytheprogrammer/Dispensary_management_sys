import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientConsultationForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { userID, name, dob, gender, contactNo, height, weight, bodyTemperature, bloodPressure, bloodGroup, spo2, reasonForVisit, ...form } = state || {};

    const [formData, setFormData] = useState({
        clinicalFindings: '',
        advice: '',
        remarks: '',
    });

    const [medicineQueue, setMedicineQueue] = useState([]);
    const [medicineDetails, setMedicineDetails] = useState({
        name: '',
        dosage: '',
        timings: '',
        days: '',
        remarks: '',
    });

    useEffect(() => {
        if (state) {
            const { clinicalFindings, advice, remarks } = state;
            setFormData({
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

    const handleMedicineChange = (e) => {
        const { name, value } = e.target;
        setMedicineDetails({ ...medicineDetails, [name]: value });
    };

    const addMedicineToQueue = () => {
        setMedicineQueue([...medicineQueue, medicineDetails]);
        setMedicineDetails({
            name: '',
            dosage: '',
            timings: '',
            days: '',
            remarks: '',
        });
    };

    const handleSendToStaff = async () => {
        try {
            const response = await fetch(`/api/update-appointment-status/${userID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    status: 'consulted',
                    clinicalFindings: formData.clinicalFindings,
                    advice: formData.advice,
                    remarks: formData.remarks,
                    prescription: medicineQueue,
                }),
            });
            if (response.ok) {
                navigate('/admin/doc-appointments');
            } else {
                console.error('Failed to update appointment status');
            }
        } catch (error) {
            console.error('Error updating appointment status:', error);
        }
    };

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center font-semibold">Patient Consultation Form</h2>
            <form className="space-y-4">
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Patient Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div><strong>Name:</strong> {name}</div>
                        <div><strong>Date of Birth:</strong> {dob}</div>
                        <div><strong>Gender:</strong> {gender}</div>
                        <div><strong>Contact No:</strong> {contactNo}</div>
                        <div><strong>Height:</strong> {height}</div>
                        <div><strong>Weight:</strong> {weight}</div>
                        <div><strong>Body Temperature:</strong> {bodyTemperature}</div>
                        <div><strong>Blood Pressure:</strong> {bloodPressure}</div>
                        <div><strong>Blood Group:</strong> {bloodGroup}</div>
                        <div><strong>SPO2:</strong> {spo2}</div>
                        <div><strong>Reason for Visit:</strong> {reasonForVisit}</div>
                    </div>
                </div>
                <div>
                    <label className="block text-lg">Clinical Findings:</label>
                    <input type="text" name="clinicalFindings" value={formData.clinicalFindings} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-lg">Advice:</label>
                    <input type="text" name="advice" value={formData.advice} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Prescription</h3>
                    <div className="flex space-x-2">
                        <input type="text" name="name" value={medicineDetails.name} onChange={handleMedicineChange} placeholder="Medicine Name" className="p-2 border border-gray-300 rounded" />
                        <select name="dosage" value={medicineDetails.dosage} onChange={handleMedicineChange} className="p-2 border border-gray-300 rounded">
                            <option value="">Dosage</option>
                            <option value="1*1">1*1</option>
                            <option value="1*2">1*2</option>
                            <option value="1*3">1*3</option>
                            <option value="1/2*1">1/2*1</option>
                            <option value="1/2*2">1/2*2</option>
                            <option value="1/2*3">1/2*3</option>
                        </select>
                        <select name="timings" value={medicineDetails.timings} onChange={handleMedicineChange} className="p-2 border border-gray-300 rounded">
                            <option value="">Timing</option>
                            <option value="before breakfast">Before Breakfast</option>
                            <option value="after breakfast">After Breakfast</option>
                            <option value="before lunch">Before Lunch</option>
                            <option value="after lunch">After Lunch</option>
                            <option value="before dinner">Before Dinner</option>
                            <option value="after dinner">After Dinner</option>
                            <option value="HS">HS</option>
                            <option value="SOS">SOS</option>
                            <option value="once a week">Once in a Week</option>
                            <option value="twice a week">Twice in a Week</option>
                            <option value="thrice a week">Thrice in a Week</option>
                        </select>
                        <input type="text" name="days" value={medicineDetails.days} onChange={handleMedicineChange} placeholder="Days" className="p-2 border border-gray-300 rounded" />
                        <input type="text" name="remarks" value={medicineDetails.remarks} onChange={handleMedicineChange} placeholder="Remarks / Suggestion" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <button type="button" onClick={addMedicineToQueue} className="mt-2 bg-blue-900 text-white px-4 py-2 rounded">Queue</button>
                    <div className="mt-4">
                        <h4 className="text-lg font-bold">Medicines Queue</h4>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border-b">Name</th>
                                        <th className="px-4 py-2 border-b">Dosage</th>
                                        <th className="px-4 py-2 border-b">Timings</th>
                                        <th className="px-4 py-2 border-b">Days</th>
                                        <th className="px-4 py-2 border-b">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medicineQueue.map((medicine, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 border-b">{medicine.name}</td>
                                            <td className="px-4 py-2 border-b">{medicine.dosage}</td>
                                            <td className="px-4 py-2 border-b">{medicine.timings}</td>
                                            <td className="px-4 py-2 border-b">{medicine.days}</td>
                                            <td className="px-4 py-2 border-b">{medicine.remarks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={handleSendToStaff} className="bg-blue-900 text-white px-4 py-2 rounded">Send to Staff</button>
            </form>
        </main>
    );
};

export default PatientConsultationForm;
