const express = require('express');
const { getUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { getUserByUsername } = require('../db');

const router = express.Router();

router.get('/me', protect, async (req, res) => {
  const { username } = req.user; // Obtendo o nome de usuário do token de autenticação
  try {
    const user = await getUserByUsername(username); // Função para buscar usuário por nome de usuário no SQLite
    res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário.' });
  }
});

module.exports = router;
