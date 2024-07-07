import React, { useState } from 'react';

const AdminReg = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    dob: '',
    gender: '',
    user_id: '',
    contactNumber: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formFields);
    // Add your logic to submit the form data to your backend
  };

  return (
    <div className="register-form p-6 bg-white rounded shadow-lg max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Admin/SuperUser</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input type="text" id="name" name="name" placeholder="Name" className="border p-2 w-full" onChange={handleChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="dob" className="block mb-2">Date of Birth:</label>
          <input type="date" id="dob" name="dob" placeholder="Date of Birth" className="border p-2 w-full" onChange={handleChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="gender" className="block mb-2">Gender:</label>
          <input type="text" id="gender" name="gender" placeholder="Gender" className="border p-2 w-full" onChange={handleChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="user_id" className="block mb-2">User ID:</label>
          <input type="text" id="user_id" name="user_id" placeholder="User ID" className="border p-2 w-full" onChange={handleChange} required />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="contactNumber" className="block mb-2">Contact Number:</label>
          <input type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" className="border p-2 w-full" onChange={handleChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" className="border p-2 w-full password-input" onChange={handleChange} required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default AdminReg;
