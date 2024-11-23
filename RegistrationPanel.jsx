import { useState } from "react";
import PropTypes from "prop-types";
import "./Modal.css"; // Reuse the modal styling

const RegistrationPanel = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student", // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    // Add form validation logic or API integration here
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="modal-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="modal-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="modal-form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Set your password"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="modal-form-group">
            <label>Register as:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="modal-submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

RegistrationPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegistrationPanel;
