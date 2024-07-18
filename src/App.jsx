// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
// import AddNewAdmin from './pages/AddNewAdmin';
// import RemoveAdminStaffDoctor from './pages/RemoveAdminStaffDoctor';
// import AddStaffDoctor from './pages/AddStaffDoctor';
// import AllAppointments from './pages/AllAppointments';
// import Inventory from './pages/Inventory';
// import ViewPatientRecord from './pages/ViewPatientRecord';
// import NewAppointment from './pages/NewAppointment';
// import AddMedicine from './pages/AddMedicine';
// import DeductMedicine from './pages/DeductMedicine';
// import PatientConsultationForm from './pages/PatientConsultationForm';
// import ViewPrescriptionForm from './pages/ViewPrescriptionForm';


const App = () => {


    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin/*" element={<Admin />} />
                        {/* <Route
                            path="/admin/*"
                            element={
                                <ProtectedRoute>
                                    <Admin />
                                </ProtectedRoute>
                            }
                        /> */}
                        {/* <Route path="/admin/add-new-admin" element={<AddNewAdmin />} />
                        <Route path="/admin/add-medicine" element={<AddMedicine />} />
                        <Route path="/admin/remove-admin-staff-doctor" element={<RemoveAdminStaffDoctor />} />
                        <Route path="/admin/Inventory" element={<Inventory />} />
                        <Route path="/admin/new-appointment" element={<NewAppointment />} />
                        <Route path="/admin/view-patient-record" element={<ViewPatientRecord />} />
                        <Route path="/admin/view-prescription-form" element={<ViewPrescriptionForm />} />
                        <Route path="/admin/add-staff-doctor" element={<AddStaffDoctor />} />
                        <Route path="/admin/all-appointments" element={<AllAppointments />} />
                        <Route path="/admin/deduct-medicine" element={<DeductMedicine />} />
                        <Route path="/admin/patient-consultation-form" element = {<PatientConsultationForm/>} /> */}
                        
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
