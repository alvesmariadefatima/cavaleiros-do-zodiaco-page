import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path='/Sobre' element={<Sobre />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
