import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientConsultationForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { userID, name, dob, gender, contactNo, height, weight, bodyTemperature, bloodPressure, bloodGroup, spo2, reasonForVisit, ...form } = state || {};

    const [formData, setFormData] = useState({
        symptoms: '',
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
                    symptoms: formData.symptoms,
                    clinicalFindings: formData.clinicalFindings,
                    advice: formData.advice,
                    remarks: formData.remarks,
                    prescription: medicineQueue,
                }),
            });
            if (response.ok) {
                navigate('/admin/all-appointments');
            } else {
                console.error('Failed to update appointment status');
            }
        } catch (error) {
            console.error('Error updating appointment status:', error);
        }
    };

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center">Patient Consultation Form</h2>
            <form className="space-y-4">
                <div className="mb-4">
                    <h3 className="text-xl font-bold">Patient Details</h3>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Date of Birth:</strong> {dob}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                    <p><strong>Contact No:</strong> {contactNo}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Weight:</strong> {weight}</p>
                    <p><strong>Body Temperature:</strong> {bodyTemperature}</p>
                    <p><strong>Blood Pressure:</strong> {bloodPressure}</p>
                    <p><strong>Blood Group:</strong> {bloodGroup}</p>
                    <p><strong>SPO2:</strong> {spo2}</p>
                    <p><strong>Reason for Visit:</strong> {reasonForVisit}</p>
                </div>
                <div>
                    <label className="block text-lg">Symptoms:</label>
                    <input type="text" name="symptoms" value={formData.symptoms} onChange={handleFormChange} className="w-full p-2 border border-gray-300 rounded" />
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
                        {medicineQueue.map((medicine, index) => (
                            <div key={index} className="flex space-x-2 border border-gray-300 p-2 rounded mt-2">
                                <p><strong>Name:</strong> {medicine.name}</p>
                                <p><strong>Dosage:</strong> {medicine.dosage}</p>
                                <p><strong>Timings:</strong> {medicine.timings}</p>
                                <p><strong>Days:</strong> {medicine.days}</p>
                                <p><strong>Remarks:</strong> {medicine.remarks}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="button" onClick={handleSendToStaff} className="bg-blue-900 text-white px-4 py-2 rounded">Send to Staff</button>
            </form>
        </main>
    );
};

export default PatientConsultationForm;
