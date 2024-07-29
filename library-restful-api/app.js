const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const authorsRouter = require('./routes/authors');
const booksRouter = require('./routes/books');

app.use('/authors', authorsRouter);
app.use('/books', booksRouter);

module.exports = app;
