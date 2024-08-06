import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewPrescriptionForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { userID, name, gender, reasonForVisit, prescription = [], userRole } = state || {};

    const [formData, setFormData] = useState({
        symptoms: state?.symptoms || '',
        clinicalFindings: state?.clinicalFindings || '',
        advice: state?.advice || '',
        remarks: state?.remarks || '',
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

    const handleCloseClick = () => {
        const rolePath = userRole === 'staff' ? '/staff/consulted-appointments' : userRole === 'doctor' ? '/doctor/consulted-appointments' : '/admin/consulted-appointments';
        navigate(rolePath);
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
                            <p><strong>Gender:</strong> {gender}</p>
                            <p><strong>Reason for Visit:</strong> {reasonForVisit}</p>
                        </>
                    )}
                </div>
                <div>
                    <h3 className="text-xl font-bold">Medicines</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">Name</th>
                                    <th className="px-4 py-2 border-b">Dosage</th>
                                    <th className="px-4 py-2 border-b">Timings</th>
                                    <th className="px-4 py-2 border-b">Days</th>
                                    <th className="px-4 py-2 border-b">Remarks</th>
                                    {userRole === 'staff' && <th className="px-4 py-2 border-b">Status</th>}
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
                                        {userRole === 'staff' && (
                                            <td className="px-4 py-2 border-b">
                                                <select
                                                    value={medicineStatus[index]}
                                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                                    className="p-2 border border-gray-300 rounded"
                                                >
                                                    <option value="provided">Provided</option>
                                                    <option value="outOfStock">Out of Stock</option>
                                                </select>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {medicineStatus.includes('outOfStock') && (
                    <button type="button" onClick={handlePrint} className="bg-blue-900 text-white px-4 py-2 rounded">Print Prescription</button>
                )}
                <button type="button" onClick={handleCloseClick} className="bg-blue-900 text-white px-4 py-2 rounded">Close</button>
            </form>
        </main>
    );
};

export default ViewPrescriptionForm;
