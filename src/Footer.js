// Footer.js
import React, { forwardRef } from 'react';
import logo_text from './logo_text.png';
import './Footer.css';

const Footer = forwardRef(({ onLinkClick }, ref) => {
  return (
    <footer className="footer-container" ref={ref}>
      <div className="footer-column footer-contact">
        <h2 className="footer-heading">CONTACTEAZĂ-NE</h2>
        <div className="logo">
          <img src={logo_text} alt="Logo" />
        </div>
        <p className="phone-label">Sunați-ne</p>
        <p className="phone-number">+373 (69) 224 776</p>
        <div className="email-form">
          <input type="email" placeholder="Email-ul tău..." />
          <button aria-label="Submit email">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <div className="footer-column footer-links">
        <a onClick={() => onLinkClick('header')}>Despre PiccolinoHome</a>
        <a onClick={() => onLinkClick('introducere')}>Cine suntem</a>
        <a onClick={() => onLinkClick('istoria')}>Istoria noastră</a>
        <a onClick={() => onLinkClick('galerie')}>Galerie de produse</a>
        <a onClick={() => onLinkClick('motive')}>De ce să ne alegi</a>
      </div>

      <div className="footer-column footer-social">
        <a href="https://www.facebook.com/Piccolinohome" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/piccolinohome?igsh=MWJwbTg4MDFnZzVhNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
});

export default Footer;
