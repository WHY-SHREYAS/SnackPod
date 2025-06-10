const express = require('express');
const app = express();
const port = 5000;

const connectToMongo = require('./db');
connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
