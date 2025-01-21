// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Certifique-se de criar este arquivo para estilização

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre-mim">Sobre Mim</Link></li>
        <li><Link to="/soft-skills">Soft Skills</Link></li>
        <li><Link to="/hard-skills">Hard Skills</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
