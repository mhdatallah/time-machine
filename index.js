require('dotenv').config();
const express = require('express')
const app = express();
const port = process.env.PORT;

app.get('/now', (req, res) => {
  timeZone = req.query.tz;
  if (timeZone) {
    msg = new Date().toLocaleString('en-US', { timeZone: timeZone });
  } else {
    msg = new Date().toLocaleString('en-US', { timeZone: 'GMT' });
  }
  res.status(200).send(msg);
})

app.get('/', (req, res) => {
  res.send('Welcome to time-machine!');
})

app.listen(port, () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`time-machine listening at http://localhost:${port}`);
  }
})