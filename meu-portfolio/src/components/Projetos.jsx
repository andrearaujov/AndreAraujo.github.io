// src/components/Projetos.jsx
import React from 'react';
import '../styles/Projetos.css';

function Projetos() {
  return (
    <div className="projetos-container">
      <h1>Projetos</h1>
      <ul>
        <li>
          <a href="https://github.com/seuusuario/projeto1" target="_blank" rel="noopener noreferrer">
            Projeto 1 - Descrição breve
          </a>
        </li>
        <li>
          <a href="https://github.com/seuusuario/projeto2" target="_blank" rel="noopener noreferrer">
            Projeto 2 - Descrição breve
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projetos;
