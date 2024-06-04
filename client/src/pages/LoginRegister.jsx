import React, { useState } from 'react';
import axios from 'axios';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
    const payload = isLogin ? { username, password } : { username, email, password, confirmPassword };

    try {
      const response = await axios.post(endpoint, payload);
      console.log(response.data);
      // Save the token to localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    // Restante do seu componente...
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">{isLogin ? 'Nome ou Email' : 'Nome'}</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-white">Senha</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white">Confirmação de Senha</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-4 text-gray-400">
          <button onClick={() => setIsLogin(!isLogin)} className="hover:underline">
            {isLogin ? 'Need to Register?' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
