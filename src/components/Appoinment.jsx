import React, { useState } from 'react';

const Appointment = () => {
  const [userType, setUserType] = useState('');
  const [formFields, setFormFields] = useState({});

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  

  const renderVitalsFields = () => (
    <>
      <h3>Vitals</h3>
      <input className="border p-2 mb-2 w-full" type="text" name="height" placeholder="Height" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="weight" placeholder="Weight" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="bodyTemp" placeholder="Body Temperature" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="bp" placeholder="Blood Pressure" onChange={handleChange} />
      <input className="border p-2 mb-2 w-full" type="text" name="spo2" placeholder="SpO2" onChange={handleChange} />
    </>
  );

  const renderFormFields = () => {
    switch (userType) {
      case 'student':
      case 'employee':
        return (
          <>
            <input className="border p-2 mb-2 w-full" type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="gender" placeholder="Gender" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="user_id" placeholder="User ID" onChange={handleChange} required />
            <input className="border p-2 mb-2 w-full" type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="purposeForComing" placeholder="Purpose for Coming" onChange={handleChange} />
            
            {renderVitalsFields()}
           </>
        );
      case 'dependent':
        return (
          <>
            <input className="border p-2 mb-2 w-full" type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="user_id" placeholder="User ID (Employee ID)" onChange={handleChange} required />
            <input className="border p-2 mb-2 w-full" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="relation" placeholder="Relation" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="maritalStatus" placeholder="Marital Status" onChange={handleChange} />
           
            {renderVitalsFields()}
          </>
        );
      default:
        return (
          <>
            <input className="border p-2 mb-2 w-full" type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="gender" placeholder="Gender" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="user_id" placeholder="User ID" onChange={handleChange} required />
            <input className="border p-2 mb-2 w-full" type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
            <input className="border p-2 mb-2 w-full" type="text" name="purposeForComing" placeholder="Purpose for Coming" onChange={handleChange} />
            
            {renderVitalsFields()}
           </>
        );
    }
  };

  return (
    <div className="register-form p-4 bg-white rounded shadow">
      <h1 className="text-2xl mb-4">New Appointment</h1>
      <div className="form-group mb-4">
        <label htmlFor="userType" className="block mb-2">User Type:</label>
        <select className="border p-2 w-full" name="userType" id="userType" onChange={handleUserTypeChange}>
          
          <option value="employee">Employee</option>
          <option value="dependent">Dependent</option>
          <option value="student">Student</option>
        </select>
      </div>
      {renderFormFields()}
      <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded" type="submit">Send to Doctor</button>
    </div>
  );
};

export default Appointment;
