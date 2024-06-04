const express = require('express');
const { registerPet, getPetsByUser } = require('../controllers/petController');
const { protect } = require('../middleware/authMiddleware');
const { addPet, getAllPets } = require('../db');

const router = express.Router();

router.post('/', protect, async (req, res) => {
  const { name, breed, age } = req.body;
  try {
    await addPet(name, breed, age); // Função para adicionar pet no SQLite
    res.status(201).json({ message: 'Pet registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar pet:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao registrar o pet.' });
  }
});

router.get('/', protect, getPetsByUser);

module.exports = router;
