import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Instructions</h2>
        <p>Welcome to Quizzle!</p>
        <p>Quizzle is DLSU's backup for Canvas in case it has an outage.</p>
        <p>This is an interactive quiz application that will allow you to test your knowledge.</p>
        <p>You will be provided with a series of multiple-choice questions, and your progress will be tracked and scored.</p>
        <p>Feedback will be provided at the end of the quiz.</p>
        <p>Happy quizzing!</p>
        <button onClick={onClose} className="close-button">X</button>
      </div>
    </div>
  );
}

export default Popup;
