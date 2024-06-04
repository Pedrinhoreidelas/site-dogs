import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetInfo = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pets/${id}`);
        setPet(response.data);
      } catch (error) {
        console.error('There was an error fetching the pet!', error);
      }
    };

    fetchPet();
  }, [id]);

  return (
    <div className="p-8 h-screen overflow-hidden">
      <h2 className="text-2xl mb-4">Informações do Pet</h2>
      <div className="bg-gray-800 p-4 rounded-lg text-white">
        <img src={pet.image || '/path/to/default-image.png'} alt={pet.name} className="w-32 h-32 rounded-full" />
        <h2 className="text-xl mt-2">{pet.name}</h2>
        <p>{pet.age} anos</p>
        <p>{pet.location}</p>
        <p>{pet.breed}</p>
        <p>{pet.size}</p>
        <p>{pet.code}</p>
      </div>
    </div>
  );
};

export default PetInfo;
