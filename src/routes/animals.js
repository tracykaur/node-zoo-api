const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

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

router.get('/animals/:id', (req, res) => {
  const animal = Animal.find(req.params.id)
  res.json(animal)
})

router.post('/animals', (req, res) => {
  const animal = Animal.create(req.body)
  res.status(201).json(animal)
})

router.patch('/animals/:id', (req, res) => {
  const animal = Animal.findAndUpdate(req.params.id, req.body)
  res.json(animal)
})

module.exports = router
