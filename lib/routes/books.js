const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .post('/', (req, res, next) => {
    Book
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Book
      .findById(req.params.id)
      .populate('authorId')
      .then(book => res.send(book))
      .catch(next);
  });

  

