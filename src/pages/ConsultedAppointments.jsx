import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ConsultedAppointments = () => {
    const [appointments, setAppointments] = useState([
        { userId: 'S123', name: 'John Doe', relation: 'self', status: 'consulted', form: {} },
        { userId: 'E456', name: 'Jane Smith', relation: 'self', status: 'consulted', form: {} },
    ]);
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleViewPrescriptionClick = (appointment) => {
        const rolePath = user.userType === 'doctor' ? '/doctor/view-prescription-form' : user.userType === 'staff' ? '/staff/view-prescription-form' : '/admin/view-prescription-form';
        navigate(rolePath, { state: { form: appointment.form, userRole: user.userType } });
    };

    return (
        <main className="p-8 font-medium mx-auto max-w-5xl">
            <h2 className="text-3xl mb-4 text-center font-semibold">Consulted Appointments</h2>
            {appointments.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">User ID</th>
                                <th className="px-4 py-2 border-b">Name</th>
                                <th className="px-4 py-2 border-b">Relation</th>
                                <th className="px-4 py-2 border-b">Status</th>
                                <th className="px-4 py-2 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.userId}>
                                    <td className="px-4 py-2 border-b">{appointment.userId}</td>
                                    <td className="px-4 py-2 border-b">{appointment.name}</td>
                                    <td className="px-4 py-2 border-b">{appointment.relation}</td>
                                    <td className="px-4 py-2 border-b">{appointment.status}</td>
                                    <td className="px-4 py-2 border-b">
                                        <button
                                            onClick={() => handleViewPrescriptionClick(appointment)}
                                            className="bg-blue-900 text-white px-4 py-2 rounded"
                                        >
                                            View Prescription
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center mt-8 text-lg">There are no consulted appointments as of now.</p>
            )}
        </main>
    );
};

export default ConsultedAppointments;
