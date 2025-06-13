import React, { useState, useRef } from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Istoria from './Istoria';
import Introducere from './Introducere';
import Motive from './Motive';
import Galerie from './Galerie';
import chat from './chat-icon.png';
import Chatbot from './Chatbot';
import './Header.css';
import logo_text from './logo_text.png';
import './Footer.css';

function App() {
  const [isChatOpen, setChatOpen] = useState(false);

  const headerRef = useRef(null);
  const introducereRef = useRef(null);
  const istoriaRef = useRef(null);
  const galerieRef = useRef(null);
  const motiveRef = useRef(null);
  const footerRef = useRef(null);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const scrollTo = (ref) => {
    if (ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFooterLinkClick = (section) => {
    switch (section) {
      case 'header':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'introducere':
        scrollTo(introducereRef);
        break;
      case 'istoria':
        scrollTo(istoriaRef);
        break;
      case 'galerie':
        scrollTo(galerieRef);
        break;
      case 'motive':
        scrollTo(motiveRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" ref={headerRef}>
      <div className="header">
        <div className="header-left">
          <img src={logo_text} alt="Logo" />
        </div>
        <div className="header-center">
          <div onClick={() => scrollTo(introducereRef)}>Cine suntem</div>
          <div onClick={() => scrollTo(istoriaRef)}>Istoria noastră</div>
          <div onClick={() => scrollTo(galerieRef)}>Galeria de produse</div>
          <div onClick={() => scrollTo(motiveRef)}>De ce să ne alegi</div>
        </div>
        <div className="header-right">
          <button onClick={() => scrollTo(footerRef)}>Contactează-ne</button>
        </div>
      </div>

      <HeroSection />
      <Introducere ref={introducereRef} />
      <Istoria ref={istoriaRef} />
      <Galerie ref={galerieRef} />
      <Motive ref={motiveRef} />

      {isChatOpen && <Chatbot onClose={toggleChat} />}

      <div className="button-chatbot-div">
        <button className="chatbot-button" onClick={toggleChat}>
          <img src={chat} alt="Chat Icon" />
        </button>
      </div>

      <Footer ref={footerRef} onLinkClick={handleFooterLinkClick} />
    </div>
  );
}

export default App;
