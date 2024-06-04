const Pet = require('../models/Pet');

exports.registerPet = async (req, res) => {
  const { name, breed, age, size, location } = req.body;
  const owner = req.user.id;

  try {
    const pet = await Pet.create({ name, breed, age, size, location, owner });
    res.status(201).json({ message: 'Pet registered successfully', pet });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPetsByUser = async (req, res) => {
  const owner = req.user.id;

  try {
    const pets = await Pet.find({ owner });
    res.status(200).json(pets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
