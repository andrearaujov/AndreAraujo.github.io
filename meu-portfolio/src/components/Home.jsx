import React from 'react';
import '../styles/Home.css';
import fotoAndre from '../assets/foto-andre.jpeg'; // Importa a imagem

function Home() {
  return (
    <div className="home-container">
      <img src={fotoAndre} alt="Sua Foto" className="profile-photo" />
      <h1>André Araújo Mendonça</h1>
      <h2>Desenvolvedor Full-Stack</h2>
    </div>
  );
}

export default Home;
