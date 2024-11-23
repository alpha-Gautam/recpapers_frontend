import PropTypes from "prop-types"; // Import PropTypes
import "./Modal.css"; // Assuming the CSS file is in the same directory

const LoginPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

// Define PropTypes for validation
LoginPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired, // isOpen must be a boolean
  onClose: PropTypes.func.isRequired, // onClose must be a function
};

export default LoginPanel;
