const express = require('express');
const { register, login } = require('../controllers/authController');
const { addUser } = require('../db');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    await addUser(username, password); // Função para adicionar usuário no SQLite
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao registrar o usuário.' });
  }
});

router.post('/login', login);

module.exports = router;
