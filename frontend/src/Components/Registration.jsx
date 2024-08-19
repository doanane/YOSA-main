import React, { useState } from "react";
import "../Styles/registration.css";
import volunteer from "../Assets/volunteer.jpg";
import { createVolunteer } from "../api/ApiService";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Proceed with registration if the email does not exist
    const VolunteerData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_address: formData.email,
    };

    createVolunteer(VolunteerData)
      .then((response) => {
        console.log("Volunteer registered successfully:", response.data);
        setMessage("Thank you for volunteering to YOSA");

        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
        });
      })
      .catch((error) => {
        console.log("There was an error registering volunteer!", error);
        setMessage("Sorry, the email has alreday been used. Please try again!");
      });
  };

  return (
    <div className="registration-container">
      <div className="image-section">
        <img src={volunteer} alt="Fashion Collection 2018" className="image" />
        <p className="image-caption">#Collection 2018</p>
      </div>
      <div className="form-section">
        <h2 className="form-title">REGISTER TO VOLUNTEER WITH US</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          {message && <p className="form-message">{message}</p>}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="form-input-wrapper">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <span className="input-icon">✉️</span>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Register <span className="button-icon">➡️</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
