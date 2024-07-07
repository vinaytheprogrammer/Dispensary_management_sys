import React, { useState } from 'react';
import Appointment from './components/Appoinment';
import AdminReg from './components/AdminReg';
import StaffReg from './components/StaffReg';
import Prescription from './components/Prescription';
import ViewAppointments from './components/ViewAppointments';
import ViewPatientHistory from './components/ViewPatientHistory';
import AddInventory from './components/AddInventory';
import DeductInventory from './components/DeductInventory'; 
import ViewInventory from './components/ViewInventory';
import QueueMedicine from './components/QueueMedicine';
import ViewMedicine from './components/ViewMedicine';

const pages = [
  'New Appointment',
  'Add new Admin',
  'Add staff/ Doctor',
  'All Appointments',
  'View Patient History',
  'Add Inventory',
  'Deduct Inventory',
  'View Inventory',
  'View Appointment',
  'Queue for Medicines',
  'View Medicines',
];

const App = () => {
  const [selectedPage, setSelectedPage] = useState('');

  const renderContent = () => {
    switch (selectedPage) {
      case 'New Appointment':
        return <Appointment />;
      case 'Add new Admin':
        return <AdminReg />;
      case 'Add staff/ Doctor':
        return <StaffReg />;
      case 'All Appointments':
        return <ViewAppointments />;
      case 'View Patient History':
        return <ViewPatientHistory />;
      case 'Add Inventory': // Render AddInventory component
        return <AddInventory />;
        case 'Deduct Inventory': // Render DeductInventory component
        return <DeductInventory />;
      case 'View Inventory':
        return <ViewInventory />;
      case 'View Appointment':
        return <Prescription />;
      case 'Queue for Medicines':
        return <QueueMedicine />;
      case 'View Medicines':
        return <ViewMedicine />;
      // Add cases for other pages here
      default:
        return <h2 className="text-4xl font-bold">Welcome to NIT Jamshedpur</h2>;
    }
  };

  return (
    <div className="min-h-screen flex">
      <nav className="w-1/4 bg-gray-200 p-4">
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <button
                className="text-left w-full p-2 hover:bg-gray-300"
                onClick={() => setSelectedPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-3/4 p-4">
        {renderContent()}
      </main>
      
    </div>
  );
};

export default App;
