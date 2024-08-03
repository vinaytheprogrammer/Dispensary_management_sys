// src/pages/Staff.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NewAppointment from './NewAppointment';
import ConsultedAppointments from './ConsultedAppointments';
import Inventory from './Inventory';
import AddMedicine from './AddMedicine';
import DeductMedicine from './DeductMedicine';
import ChangePassword from './ChangePassword';

const Staff = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 shadow-lg overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-[#274187]">Staff Panel</h2>
                    <ul className='font-semibold'>
                        <li className="mb-2">
                            <Link to="new-appointment" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                New Appointment
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="consulted-appointments" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Consulted Appointments
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="inventory" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                View Inventory
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="add-medicine" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Add Medicine to Inventory
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="deduct-medicine" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Deduct Medicine from Inventory
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
                    <Route path="new-appointment" element={<NewAppointment />} />
                    <Route path="consulted-appointments" element={<ConsultedAppointments />} />
                    <Route path="inventory" element={<Inventory />} />
                    <Route path="add-medicine" element={<AddMedicine />} />
                    <Route path="deduct-medicine" element={<DeductMedicine />} />
                    <Route path="change-password" element={<ChangePassword />} />
                </Routes>
            </section>
        </div>
    );
};

export default Staff;
