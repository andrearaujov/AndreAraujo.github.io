// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css'; // Estilização do Footer

function Footer() {
  return (
    <footer className="footer">
      <a href="https://wa.me/35999322102" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://linkedin.com/in/andré-araujo-667547280" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:andremendoncamineiro@gmail.com">
        <FaEnvelope />
      </a>
      <a href="https://github.com/andrearaujov" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;
