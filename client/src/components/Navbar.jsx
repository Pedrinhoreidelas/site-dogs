import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileUserImg from '../imgs/profile-user.png';

const Navbar = ({ toggleTheme }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
        <nav className="bg-slate-800 p-4 text-white flex justify-between items-center">
    <div className="flex space-x-10">
        <Link to="/" className="bg-black rounded-xl shadow px-8  hover:text-gray-400 ">Home</Link>
        <Link to="/register-pet" className="hover:text-gray-400 bg-black rounded-xl shadow px-8 h-9 ">Cadastro de Pets</Link>
        <Link to="/about" className="hover:text-gray-400 bg-black rounded-xl shadow px-8">Sobre Nós</Link>
      </div>
      <div className="relative">
        <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
          <img src={profileUserImg } alt="Profile" className="w-8 h-8 rounded-full"/>
        </button>
        {isProfileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
            <button onClick={toggleTheme} className="w-full text-left p-2 hover:bg-gray-200">Switch Theme</button>
            <Link to="/profile" className="block p-2 hover:bg-gray-200">Perfil</Link>
            <button className="w-full text-left p-2 hover:bg-gray-200">Deslogar</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
