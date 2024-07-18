import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([
        // Sample data, replace with actual data fetching
        { userId: 'S123', name: 'John Doe', relation: 'self', status: 'to be consulted' },
        { userId: 'E456', name: 'Jane Smith', relation: 'self', status: 'consulted' },
        { userId: 'E789', name: 'Bob Johnson', relation: 'dependant', status: 'to be consulted' },
    ]);
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleProceedClick = (appointment) => {
        if (appointment.status === 'consulted') {
            navigate('/admin/view-prescription-form', { state: { form: appointment.form } });
        } else {
            navigate('/admin/patient-consultation-form', { state: appointment });
        }
    };

    const filteredAppointments = appointments.filter((appointment) => {
        if (filter === 'all') return true;
        return appointment.status === filter;
    });

    return (
        <main className="p-8">
            <h2 className="text-3xl mb-4 text-center">All Appointments</h2>
            <div className="mb-4">
                <label htmlFor="filter" className="block text-lg mb-2">Filter:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="all">All</option>
                    <option value="to be consulted">To be consulted</option>
                    <option value="consulted">Consulted</option>
                </select>
            </div>
            {filteredAppointments.length > 0 ? (
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
                            {filteredAppointments.map((appointment) => (
                                <tr key={appointment.userId}>
                                    <td className="px-4 py-2 border-b">{appointment.userId}</td>
                                    <td className="px-4 py-2 border-b">{appointment.name}</td>
                                    <td className="px-4 py-2 border-b">{appointment.relation}</td>
                                    <td className="px-4 py-2 border-b">{appointment.status}</td>
                                    <td className="px-4 py-2 border-b">
                                        <button
                                            onClick={() => handleProceedClick(appointment)}
                                            className="bg-blue-900 text-white px-4 py-2 rounded"
                                        >
                                            {appointment.status === 'consulted' ? 'View Prescription' : 'Proceed'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center mt-8 text-lg">There are no appointments as of now.</p>
            )}
        </main>
    );
};

export default AllAppointments;
