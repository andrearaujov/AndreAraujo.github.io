// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css'; // Crie este arquivo para estilização

function Home() {
  return (
    <div className="home-container">
      <img src="/path/to/your/photo.jpg" alt="Sua Foto" className="profile-photo" />
      <h1>Seu Nome</h1>
      <h2>Desenvolvedor Full-Stack</h2>
    </div>
  );
}

export default Home;
