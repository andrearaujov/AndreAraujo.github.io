import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bgVideo from './assets/background.mp4'; 
import './app.css';

// Importe seus componentes
import Home from './components/Home';
import SobreMim from './components/SobreMim';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import Projetos from './components/Projetos';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename="/meu-portfolio/">
      <div className="App">
        {/* Vídeo de fundo */}
        <video autoPlay muted loop className="background-video">
          <source src={bgVideo} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>

        {/* Conteúdo principal */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/hard-skills" element={<HardSkills />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
