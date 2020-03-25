const { getAuthor, getAuthors, getBooks } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');
const Author = require('../lib/models/Author');
const Book = require('../lib/models/Book');

describe('author routes', () => {
  it('creates an author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send({
        name: 'test author'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'test author',
          __v: 0
        });
      });
  });


});
