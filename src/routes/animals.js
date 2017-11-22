const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

function validateFound(animal) {
  if (animal == null) {
    const error = new Error('Animal not found') // Error with message
    error.status = 404 // Store status for res.status() to use
    throw error
  }
}

// Read all
router.get('/animals', (req, res) => {
  const query = req.query.q || ''
  let animals
  if (query) {
    animals = Animal.search(query)
  }
  else {
    animals = Animal.all()
  }
  res.json(animals)
})

// Read single
router.get('/animals/:id', (req, res) => {
  const animal = Animal.find(req.params.id)
  validateFound(animal)
  res.json(animal)
})

// Create
router.post('/animals', (req, res) => {
  const animal = Animal.create(req.body)
  res.status(201).json(animal)
})

// Update
router.patch('/animals/:id', (req, res) => {
  const animal = Animal.findAndUpdate(req.params.id, req.body)
  validateFound(animal)
  res.json(animal)
})

// Destroy
router.delete('/animals/:id', (req, res) => {
  const animal = Animal.destroy(req.params.id)
  validateFound(animal)
  res.json(animal)
})

router.get('/sea-animals', (req, res) => {
  res.status(200).json(Animal.onlySeaAnimal());
});

module.exports = router
