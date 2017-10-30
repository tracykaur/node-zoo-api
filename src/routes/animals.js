const express = require('express')

const router = express.Router()

router.get('/animals', (req, res) => {
  res.json([
    {
      name: 'Gorillas',
      count: 4
    },
    {
      name: 'Zebra',
      count: 14
    },
    {
      name: 'Meercats',
      count: 26
    }
  ])
})

module.exports = router
