import React, { useState } from "react";
import axios from "axios";

const NewAppointment = () => {
  const [appointmentType, setAppointmentType] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    gender: "",
    contactNo: "",
    reasonForVisit: "",
    height: "",
    weight: "",
    bodyTemperature: "",
    bloodPressure: "",
    bloodGroup: "",
    spo2: "",
    userId: "",
    relationship: "",
  });
  const [detailsFetched, setDetailsFetched] = useState(false);
  const [editVitals, setEditVitals] = useState(false);
  const [dependents, setDependents] = useState([]);
  const [selectedDependent, setSelectedDependent] = useState("");
  const [newDependent, setNewDependent] = useState(false);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setAppointmentType(type);
    resetFormData();
    setDetailsFetched(false);
    setEditVitals(false);
    setSelectedDependent("");
    setNewDependent(false);
  };

  const resetFormData = () => {
    setFormData({
      id: "",
      name: "",
      dob: "",
      gender: "",
      contactNo: "",
      reasonForVisit: "",
      height: "",
      weight: "",
      bodyTemperature: "",
      bloodPressure: "",
      bloodGroup: "",
      spo2: "",
      userId: "",
      relationship: appointmentType === "dependent" ? "dependent" : "self",
    });
  };

  const handleFetchDetails = async () => {
    try {
      const data = {
        user_id: formData.id,
        user_type: appointmentType,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:3000/api/staff/getinformation",
        {
          user_id: formData.id,
          user_type: appointmentType,
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setFormData((prevFormData) => ({
          ...prevFormData,
          name: data.data.name,
          dob: data.data.DOB,
          gender: data.data.gender,
          contactNo: data.data.contact_no,
          userId: data.data.user_id,
          height: data.data.vitals.height || "",
          weight: data.data.vitals.weight || "",
          bodyTemperature: data.data.vitals.body_temp || "",
          bloodPressure: data.data.vitals.bp || "",
          bloodGroup: data.data.vitals.bloodGroup || "",
          spo2: data.data.vitals.spo2 || "",
        }));
        setDetailsFetched(true);
      } else {
        console.error("Failed to fetch details");
      }
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  const handleFetchDependents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/staff/getdependents/${formData.id}`
      );
      if (response.status === 200) {
        setDependents(response.data.dependents);
      } else {
        console.error("Failed to fetch dependents");
      }
    } catch (error) {
      console.error("Error fetching dependents:", error);
    }
  };

  const handleDependentChange = (e) => {
    const value = e.target.value;
    if (value === "new") {
      setNewDependent(true);
      resetFormData();
    } else {
      setNewDependent(false);
      const dependent = dependents.find((dep) => dep.id === value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: dependent.name,
        dob: dependent.dob,
        gender: dependent.gender,
        contactNo: dependent.contactNo,
        userId: dependent.userId,
        height: dependent.height || "",
        weight: dependent.weight || "",
        bodyTemperature: dependent.bodyTemperature || "",
        bloodPressure: dependent.bloodPressure || "",
        bloodGroup: dependent.bloodGroup || "",
        spo2: dependent.spo2 || "",
      }));
    }
    setSelectedDependent(value);
    setDetailsFetched(value !== "new");
  };

  const handleUpdateVitals = () => {
    setEditVitals(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setEditVitals(false);
    const data = {
      user_id: formData.id,
      height: formData.height,
      weight: formData.weight,
      body_temp: formData.body_temp,
      bp: formData.bp,
      spo2: formData.spo2,
    };

    axios
      .put("http://localhost:3000/api/staff/update", data)
      .then((response) => {
        console.log("Medicine added successfully:", response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetFormData();
    setDetailsFetched(false);
    setEditVitals(false);
  };

  return (
    <main className="p-8 font-medium">
      <h2 className="text-3xl mb-4 text-center font-semibold">
        New Appointment
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="appointmentType" className="block text-lg mb-2">
            Appointment Type:
          </label>
          <select
            id="appointmentType"
            value={appointmentType}
            onChange={handleTypeChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Appointment Type</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="dependent">Dependent</option>
          </select>
        </div>
        {appointmentType && (
          <>
            <div className="mb-4">
              <label htmlFor="id" className="block text-lg mb-2">
                {appointmentType === "student" ? "Student ID:" : "Employee ID:"}
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={(e) =>
                  setFormData({ ...formData, id: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            {!detailsFetched && appointmentType !== "dependent" && (
              <button
                type="button"
                onClick={handleFetchDetails}
                className="w-full bg-blue-900 text-white p-2 rounded"
              >
                Fetch Details
              </button>
            )}
            {appointmentType === "dependent" && !detailsFetched && (
              <div>
                <button
                  type="button"
                  onClick={handleFetchDependents}
                  className="w-full bg-blue-900 text-white p-2 rounded mb-4"
                >
                  Fetch Dependents
                </button>
                {dependents.length > 0 && (
                  <div className="mb-4">
                    <label htmlFor="dependent" className="block text-lg mb-2">
                      Select Dependent:
                    </label>
                    <select
                      id="dependent"
                      value={selectedDependent}
                      onChange={handleDependentChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Dependent</option>
                      {dependents.map((dependent) => (
                        <option key={dependent.id} value={dependent.id}>
                          {dependent.name}
                        </option>
                      ))}
                      <option value="new">Not in the list</option>
                    </select>
                  </div>
                )}
                {selectedDependent === "new" && (
                  <button
                    type="button"
                    onClick={() => setNewDependent(true)}
                    className="w-full bg-blue-900 text-white p-2 rounded mb-4"
                  >
                    Add Dependent Details
                  </button>
                )}
              </div>
            )}
            {(detailsFetched || newDependent) && (
              <>
                <div className="mt-4 border border-gray-300 p-4">
                  <h3 className="text-xl mb-2">Patient Details</h3>
                  <p>
                    <strong>User ID:</strong> {formData.userId}
                  </p>
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {formData.dob}
                  </p>
                  <p>
                    <strong>Gender:</strong> {formData.gender}
                  </p>
                  <p>
                    <strong>Contact No.:</strong> {formData.contactNo}
                  </p>
                  <p>
                    <strong>Relationship:</strong> {formData.relationship}
                  </p>
                </div>
                {newDependent && (
                  <div className="mt-4 border border-gray-300 p-4">
                    <h3 className="text-xl mb-2">New Dependent Details</h3>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-lg mb-2">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="dob" className="block text-lg mb-2">
                        Date of Birth:
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="gender" className="block text-lg mb-2">
                        Gender:
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="contactNo" className="block text-lg mb-2">
                        Contact No.:
                      </label>
                      <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactNo: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="mt-4 border border-gray-300 p-4">
                  <h3 className="text-xl mb-2">Reason for Visit</h3>
                  <textarea
                    id="reasonForVisit"
                    name="reasonForVisit"
                    value={formData.reasonForVisit}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        reasonForVisit: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mt-4 border border-gray-300 p-4">
                  <h3 className="text-xl mb-2">Vitals</h3>
                  {editVitals ? (
                    <div>
                      <div className="mb-4">
                        <label htmlFor="height" className="block text-lg mb-2">
                          Height:
                        </label>
                        <input
                          type="text"
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={(e) =>
                            setFormData({ ...formData, height: e.target.value })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="weight" className="block text-lg mb-2">
                          Weight:
                        </label>
                        <input
                          type="text"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={(e) =>
                            setFormData({ ...formData, weight: e.target.value })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="body_temp"
                          className="block text-lg mb-2"
                        >
                          Body Temperature:
                        </label>
                        <input
                          type="text"
                          id="body_temp"
                          name="body_temp"
                          value={formData.body_temp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              body_temp: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="bp" className="block text-lg mb-2">
                          Blood Pressure:
                        </label>
                        <input
                          type="text"
                          id="bp"
                          name="bp"
                          value={formData.bp}
                          onChange={(e) =>
                            setFormData({ ...formData, bp: e.target.value })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="bloodGroup"
                          className="block text-lg mb-2"
                        >
                          Blood Group:
                        </label>
                        <input
                          type="text"
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              bloodGroup: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="spo2" className="block text-lg mb-2">
                          SpO2:
                        </label>
                        <input
                          type="text"
                          id="spo2"
                          name="spo2"
                          value={formData.spo2}
                          onChange={(e) =>
                            setFormData({ ...formData, spo2: e.target.value })
                          }
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleSaveChanges}
                        className="w-full bg-blue-900 text-white p-2 rounded"
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p>
                        <strong>Height:</strong> {formData.height}
                      </p>
                      <p>
                        <strong>Weight:</strong> {formData.weight}
                      </p>
                      <p>
                        <strong>Body Temperature:</strong>{" "}
                        {formData.bodyTemperature}
                      </p>
                      <p>
                        <strong>Blood Pressure:</strong>{" "}
                        {formData.bloodPressure}
                      </p>
                      <p>
                        <strong>Blood Group:</strong> {formData.bloodGroup}
                      </p>
                      <p>
                        <strong>SpO2:</strong> {formData.spo2}
                      </p>
                      <button
                        type="button"
                        onClick={handleUpdateVitals}
                        className="w-full bg-blue-900 text-white p-2 rounded"
                      >
                        Update Vitals
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded mt-4"
                >
                  Submit
                </button>
              </>
            )}
          </>
        )}
      </form>
    </main>
  );
};

export default NewAppointment;
