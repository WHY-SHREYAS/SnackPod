const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require('./db');

// ✅ Correct DB connection before server starts
mongoDB().then(() => {

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
  });

  app.use(express.json()); 
  app.use('/api', require("./Routes/CreateUser")); 
  app.use('/api', require("./Routes/DisplayData"));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});
