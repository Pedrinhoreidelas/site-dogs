import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimalCard from '../components/AnimalCard';
import profileUserImg from '../imgs/profile-user.png';

const Profile = () => {
  const [user, setUser] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await axios.get('/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(userResponse.data);
    };

    const fetchAnimalsData = async () => {
      const token = localStorage.getItem('token');
      const animalsResponse = await axios.get('/api/pets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAnimals(animalsResponse.data);
    };

    fetchUserData();
    fetchAnimalsData();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center space-x-10">
        <img src={profileUserImg} alt="Profile" className="w-32 h-32 rounded-full" />
        <div className="ml-4">
          <h1 className="text-3xl">{user.username}</h1>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {animals.map(animal => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
