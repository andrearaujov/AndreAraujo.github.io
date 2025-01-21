import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

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
