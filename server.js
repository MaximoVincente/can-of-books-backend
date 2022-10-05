'use strict';

require('dotenv').config();

const cors = require('cors');
const express = require('express');
//bring in mongoose
const mongoose = require('mongoose');

const app = express();
app.use(cors());

//middleware
app.use(express.json());


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

//Post endpoints
app.post('/books', postBooks);

async function postBooks(req, res, next) {
  console.log(req.body);
  try{
    const newBook = await Book.create(req.body);
    res.status(200).send(newBook);
  }catch(error){
    next (error);
  }
}

//delete book
app.delete('/books/:id', deleteBook);

async function deleteBook(req, res, next) {
  const id = req.params.id;
  console.log(id);
  try{
    await Book.findByIdAndDelete(id);
    res.status(204).send('Delete was Succesful')
  }catch(error){
    next(error);
  }
}

//Put endpoint

app.put('/books/:id', putBook);

async function putBook(req, res, next) {
  const id = req.params.id;
  console.log(id);
  try {
    const data = req.body;

    const options = {
      new: true,
      overwrite: true,
    };
    // Represents the updated document! Here it's the updated cat
    const updatedBook = await Book.findByIdAndUpdate(id, data, options);
    res.status(201).send(updatedBook);
  } catch (error) {
    next(error);
  }
}


// catch-all
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

// Error handling app.use()
app.use((error, req, res) => {
  res.status(500).send(error.message);
});
