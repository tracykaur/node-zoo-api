const express = require('express')

const server = express()

// Add JSON plugin which allows JSON as the body in POST/PATCH/PUT requests
server.use(require('body-parser').json())
server.use('/', require('./routes'))

// Handles any errors thrown by a route
// Outputs json with key `errors`
server.use((error, req, res, next) => {
  // Use status code if provided by the error, or fallback to 500 Internal server error
  res.status(error.status || 500)
  res.json({ errors: [error.message] })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log('Started on port', port)
})
