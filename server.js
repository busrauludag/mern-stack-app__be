const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://busra:b12345@ds151596.mlab.com:51596/todos", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function(){
  console.log('MongoDB database connection established successfully.');
});

app.listen(PORT, function(){
  console.log(`Server is runnig on Port: ${PORT}`);
});