require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to time-machine!')
})

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`time-machine listening at http://localhost:${port}`)
  }
})