// src/components/Footer.jsx
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css'; // Estilização do Footer

function Footer() {
  return (
    <footer className="footer">
      <a href="https://wa.me/seunumerowhatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:seuemail@example.com">
        <FaEnvelope />
      </a>
      <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;
