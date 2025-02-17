// src/components/Projetos.jsx
import React from 'react';
import '../styles/Projetos.css';

function Projetos() {
  return (
    <div className="projetos-container">
      <h1>Projetos</h1>
      <ul>
        <li>
          <a href="https://github.com/andrearaujov/Estrutura-de-dados-c---" target="_blank" rel="noopener noreferrer">
            Estrutura de Dados em C++ - Algumas atividades práticas, sobre árvores, listas e filas
          </a>
        </li>
        <li>
          <a href="https://github.com/andrearaujov/PPOO" target="_blank" rel="noopener noreferrer">
            Atividades e Jogos em PPOO com Java - Alguns jogos implementados com programação orientada a objetos e java
          </a>
        </li>
        <li>
          <a href="https://github.com/andrearaujov/MySql-Pokedex" target="_blank" rel="noopener noreferrer">
            Pokedex - Um banco de dados de uma pokedex, feito no MySql, incluindo consultas (pokemons)
          </a>
        </li>
        <li>
          <a href="https://github.com/andrearaujov/Sistema-MeuPPC" target="_blank" rel="noopener noreferrer">
            Software para enviar, editar e avaliar ppc's (CRUD) - Um sistema CRUD feito para realizar as operações necessárias para o funcionamento do gerenciamento de PPC's, utilizando Phyton, React (JavaScript). Além disso com teste via cypress otimizados, e software ja verificado pelo SonarQube
          </a>
        </li>
        <li>
          <a href="https://github.com/andrearaujov/ProjetoHtmlCss" target="_blank" rel="noopener noreferrer">
            Projeto loja de roupas - Pequeno projeto apenas utilizando css e html
          </a>
        </li>

        <li>
          <a href="https://github.com/andrearaujov/ToDoListReact" target="_blank" rel="noopener noreferrer">
            To Do List - Projeto react de uma lista de a fazeres.
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Projetos;
