const express = require('express')

const server = express()

server.use('/', require('./routes'))

const port = process.env.PORT || 7000
server.listen(port, () => {
  console.log('Started on port', port)
})