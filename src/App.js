import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import About from './components/About';

const API_KEY = '2d647d47f48c4cbdbaed42b32a2ca683';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiKey={API_KEY} />} />
        <Route path="/recipe/:id" element={<RecipeDetail apiKey={API_KEY} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
