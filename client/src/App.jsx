import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginRegister from './pages/LoginRegister';
import Home from './pages/Home';
import Profile from './pages/Profile';
import RegisterPet from './pages/RegisterPet';
import About from './pages/About';
import PetInfo from './pages/PetInfo';
import './tailwind.css'; // Ensure this path is correct

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <Router>
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register-pet" element={<RegisterPet />} />
            <Route path="/about" element={<About />} />
            <Route path="/pet-info/:id" element={<PetInfo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
