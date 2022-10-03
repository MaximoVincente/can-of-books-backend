'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Book = new Schema({
    
});

const BookModel = mongoose.model('books', Book);

module.exports = BookModel;