import React from "react";
import "./EmergencyPopup.css";

export default function EmergencyPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>🚨 Emergency Assistance</h2>
        <p>If you need immediate medical help, please use the options below.</p>

        <div className="popup-actions">
          <a href="tel:+916372087101" className="btn call-btn">
            Call Ambulance (108)
          </a>
          <a href="tel:+911234567890" className="btn contact-btn">
            Call Hospital
          </a>
          <a href="/emergency-form" className="btn report-btn">
            Report Emergency
          </a>
        </div>
      </div>
    </div>
  );
}
