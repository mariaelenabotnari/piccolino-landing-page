import React from 'react';
import './Chatbot.css'; 
import logo from './chat-icon.png';

function Chatbot({ onClose }) {
  return (
    <div className="chatbot-popup">
      <div className="chatbot-header">
        <img src={logo} alt="Piccolino Logo" className="chatbot-logo" />
        <span className="chatbot-title">Piccolino</span>
        <button onClick={onClose} className="chatbot-close-btn">-</button>
      </div>
      <div className="chatbot-body">
        <div className="chatbot-message">
          <p>Bun venit la <strong>Piccolino Home</strong>!</p>
          <p>Eu sunt <strong>PiccolinoBot</strong>, și sunt aici să te ajut să găsești fața de masă perfectă pentru casa ta.</p>
          <p>Ce ai dori să faci azi?</p>
        </div>
      </div>
      <div className="chatbot-footer">
        <input type="text" placeholder="Întreabă orice..." />
        <button className="send-button">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default Chatbot;