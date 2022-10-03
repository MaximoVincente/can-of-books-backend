'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
//bring in mongoose
const mongoose = require('mongoose');

const app = express();
app.use(cors());

//Mongoose
mongoose.connect(process.env.DB_URL); // DB url goes here
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
db.once('open', function() {
  console.log('Mongoose is connected to Mongo');
});
const Book = require('./models/books.js');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

//Enpoints
app.get('/', (request, response) => {

  response.send('test request received')

})

app.get('/books', getBooks);

async function getBooks(req, res) {
  try{
    const results = await Book.find();
    res.status(200).send(results);
  }catch (error){
    res.status(500).send(error);
  }
}

