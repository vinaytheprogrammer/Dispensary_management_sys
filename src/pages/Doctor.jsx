// src/pages/Doctor.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ViewPatientRecord from './ViewPatientRecord';
import NewAppointment from './NewAppointment';
import DocAppointments from './DocAppointments';
import Inventory from './Inventory';
import ChangePassword from './ChangePassword';

const Doctor = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 shadow-lg overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-[#274187]">Doctor Panel</h2>
                    <ul className='font-semibold'>
                        <li className="mb-2">
                            <Link to="view-patient-record" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                View Patient Records
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="new-appointment" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                New Appointment
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="doc-appointments" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Doctor Appointments
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="inventory" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                View Inventory
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="change-password" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Change Password
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <section className="flex-1 p-4 overflow-y-auto">
                <Routes>
                    <Route path="view-patient-record" element={<ViewPatientRecord />} />
                    <Route path="new-appointment" element={<NewAppointment />} />
                    <Route path="doc-appointments" element={<DocAppointments />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="change-password" element={<ChangePassword />} />
                </Routes>
            </section>
        </div>
    );
};

export default Doctor;
