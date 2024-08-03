import React, { useState } from 'react';

const NewAppointment = () => {
    const [appointmentType, setAppointmentType] = useState('');
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        dob: '',
        gender: '',
        contactNo: '',
        reasonForVisit: '',
        height: '',
        weight: '',
        bodyTemperature: '',
        bloodPressure: '',
        bloodGroup: '',
        spo2: '',
        userId: '',
        relationship: '',
    });
    const [detailsFetched, setDetailsFetched] = useState(false);
    const [editVitals, setEditVitals] = useState(false);

    const handleTypeChange = (e) => {
        const type = e.target.value;
        setAppointmentType(type);
        setFormData((prevFormData) => ({
            ...prevFormData,
            id: '',
            name: '',
            dob: '',
            gender: '',
            contactNo: '',
            reasonForVisit: '',
            height: '',
            weight: '',
            bodyTemperature: '',
            bloodPressure: '',
            bloodGroup: '',
            spo2: '',
            userId: '',
            relationship: type === 'dependent' ? 'dependent' : 'self',
        }));
        setDetailsFetched(false);
        setEditVitals(false);
    };

    const handleFetchDetails = async () => {
        try {
            // Implement fetching details based on appointmentType and formData.id
            const response = await fetch(`/api/fetch-details/${appointmentType}/${formData.id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    name: data.name,
                    dob: data.dob,
                    gender: data.gender,
                    contactNo: data.contactNo,
                    userId: data.userId,
                    height: data.height || '',
                    weight: data.weight || '',
                    bodyTemperature: data.bodyTemperature || '',
                    bloodPressure: data.bloodPressure || '',
                    bloodGroup: data.bloodGroup || '',
                    spo2: data.spo2 || '',
                }));
                setDetailsFetched(true);
            } else {
                console.error('Failed to fetch details');
            }
        } catch (error) {
            console.error('Error fetching details:', error);
        }
    };

    const handleUpdateVitals = () => {
        setEditVitals(true);
    };

    const handleSaveChanges = () => {
        setEditVitals(false);
        // Save the updated vitals to the backend
        console.log('Updated vitals:', {
            height: formData.height,
            weight: formData.weight,
            bodyTemperature: formData.bodyTemperature,
            bloodPressure: formData.bloodPressure,
            bloodGroup: formData.bloodGroup,
            spo2: formData.spo2,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., save appointment details)
        console.log(formData);
        // Reset form after submission
        setFormData({
            id: '',
            name: '',
            dob: '',
            gender: '',
            contactNo: '',
            reasonForVisit: '',
            height: '',
            weight: '',
            bodyTemperature: '',
            bloodPressure: '',
            bloodGroup: '',
            spo2: '',
            userId: '',
            relationship: '',
        });
        setDetailsFetched(false);
        setEditVitals(false);
    };

    return (
        <main className="p-8 font-medium">
            <h2 className="text-3xl mb-4 text-center font-semibold">New Appointment</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="appointmentType" className="block text-lg mb-2">Appointment Type:</label>
                    <select id="appointmentType" value={appointmentType} onChange={handleTypeChange} className="w-full p-2 border border-gray-300 rounded">
                        <option value="">Select Appointment Type</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="dependent">Dependent</option>
                    </select>
                </div>
                {appointmentType && (
                    <>
                        <div className="mb-4">
                            <label htmlFor="id" className="block text-lg mb-2">{appointmentType === 'student' ? 'Student ID:' : 'Employee ID:'}</label>
                            <input type="text" id="id" name="id" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        {!detailsFetched && (
                            <button type="button" onClick={handleFetchDetails} className="w-full bg-blue-900 text-white p-2 rounded">Fetch Details</button>
                        )}

                        {/* Display fetched details */}
                        <div className="mt-4 border border-gray-300 p-4">
                            <h3 className="text-xl mb-2">Patient Details</h3>
                            <p><strong>User ID:</strong> {formData.userId}</p>
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Date of Birth:</strong> {formData.dob}</p>
                            <p><strong>Gender:</strong> {formData.gender}</p>
                            <p><strong>Contact No.:</strong> {formData.contactNo}</p>
                            <p><strong>Relationship:</strong> {formData.relationship}</p>
                        </div>

                        {/* Additional fields */}
                        <div className="mt-4">
                            <label htmlFor="reasonForVisit" className="block text-lg mb-2">Reason for Visit:</label>
                            <textarea id="reasonForVisit" name="reasonForVisit" value={formData.reasonForVisit} onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })} className="w-full p-2 border border-gray-300 rounded"></textarea>
                        </div>

                        {/* Vitals fields */}
                        <div className="mt-4 border border-gray-300 p-4">
                            <h3 className="text-xl mb-2">Vitals</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="height" className="block text-lg mb-2">Height:</label>
                                    <input type="text" id="height" name="height" value={formData.height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-lg mb-2">Weight:</label>
                                    <input type="text" id="weight" name="weight" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                                <div>
                                    <label htmlFor="bodyTemperature" className="block text-lg mb-2">Body Temperature:</label>
                                    <input type="text" id="bodyTemperature" name="bodyTemperature" value={formData.bodyTemperature} onChange={(e) => setFormData({ ...formData, bodyTemperature: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                                <div>
                                    <label htmlFor="bloodPressure" className="block text-lg mb-2">Blood Pressure:</label>
                                    <input type="text" id="bloodPressure" name="bloodPressure" value={formData.bloodPressure} onChange={(e) => setFormData({ ...formData, bloodPressure: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                                <div>
                                    <label htmlFor="bloodGroup" className="block text-lg mb-2">Blood Group:</label>
                                    <input type="text" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                                <div>
                                    <label htmlFor="spo2" className="block text-lg mb-2">SpO2:</label>
                                    <input type="text" id="spo2" name="spo2" value={formData.spo2} onChange={(e) => setFormData({ ...formData, spo2: e.target.value })} className="w-full p-2 border border-gray-300 rounded" disabled={!editVitals} />
                                </div>
                            </div>
                            <button type="button" onClick={editVitals ? handleSaveChanges : handleUpdateVitals} className="w-full bg-blue-900 text-white p-2 rounded mt-4">
                                {editVitals ? 'Save Changes' : 'Edit Vitals'}
                            </button>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded mt-4">Submit Appointment</button>
                    </>
                )}
            </form>
        </main>
    );
};

export default NewAppointment;
