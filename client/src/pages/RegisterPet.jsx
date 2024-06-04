import React, { useState } from 'react';
import axios from 'axios';

const RegisterPet = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const petData = { name, breed, age, size, location };

    try {
      const response = await axios.post('http://localhost:5000/api/pets', petData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Cadastro de Animal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Nome</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Raça</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Idade</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Porte</label>
          <select
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="small">Pequeno</option>
            <option value="medium">Médio</option>
            <option value="large">Grande</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block">Localização</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Registrar Animal</button>
      </form>
    </div>
  );
};

export default RegisterPet;
