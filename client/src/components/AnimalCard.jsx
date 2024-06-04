import React from 'react';
import animalimage from '../imgs/paw.png';

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-blue-800 rounded-lg hover:bg-purple-950 text-white max-w-52 min-w-52 space-x-4 p-9 " >
      <img src={animalimage} alt={animal.name} className="w-32 h-32 rounded-full" />
      <h2 className="text-xl mt-2">{animal.name}</h2>
      <p>{animal.age} anos</p>
      <p>Localização : {animal.location}</p>
      <p>Raça : {animal.breed}</p>
      <p>Porte {animal.size}</p>
      
    </div>
  );
};

export default AnimalCard;
