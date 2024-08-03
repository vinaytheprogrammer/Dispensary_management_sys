import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddNewAdmin from './AddNewAdmin';
import AddStaffDoctor from './AddStaffDoctor';
import RemoveAdminStaffDoctor from './RemoveAdminStaffDoctor';
import AddMedicine from './AddMedicine';
import DeductMedicine from './DeductMedicine';
import NewAppointment from './NewAppointment';
import DocAppointments from './DocAppointments';
import ViewPatientRecord from './ViewPatientRecord';
import Inventory from './Inventory';
import PatientConsultationForm from './PatientConsultationForm';
import ViewPrescriptionForm from './ViewPrescriptionForm';
import ChangePassword from './ChangePassword';
import ConsultedAppointments from './ConsultedAppointments';
const Admin = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 shadow-lg overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-[#274187]">Admin Panel</h2>
                    <ul className='font-semibold'>
                        <li className="mb-2">
                            <Link to="add-new-admin" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Add New Admin
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="remove-admin-staff-doctor" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Remove Admin/Staff
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="add-staff-doctor" className="block py-2 px-4 rounded-lg hover:bg-gray-200">
                                Add Staff/Doctor
                            </Link>
                        </li>
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
                  
                    <Route path="add-new-admin" element={<AddNewAdmin />} />
                    <Route path="add-medicine" element={<AddMedicine />} />
                    <Route path="remove-admin-staff-doctor" element={<RemoveAdminStaffDoctor />} />
                    <Route path="inventory" element={<Inventory />} />

                  
                    <Route path="new-appointment" element={<NewAppointment />} />
                    <Route path="view-patient-record" element={<ViewPatientRecord />} />
                    <Route path="view-prescription-form" element={<ViewPrescriptionForm />} />
                    
                    <Route path="add-staff-doctor" element={<AddStaffDoctor />} />
                    <Route path="doc-appointments" element={<DocAppointments />} />
                    <Route path="consulted-appointments" element={<ConsultedAppointments />} />
                    <Route path="deduct-medicine" element={<DeductMedicine />} />
                    <Route path="patient-consultation-form" element={<PatientConsultationForm />} />
                    <Route path="change-password" element={<ChangePassword />} />
                </Routes>
            </section>
        </div>
    );
};

export default Admin;
