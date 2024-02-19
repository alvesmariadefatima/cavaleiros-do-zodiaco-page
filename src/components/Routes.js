import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cavaleiros from './pages/Cavaleiros';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Cavaleiros" element={<Cavaleiros />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
