const { getAuthor, getBook } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  it('creates a book', async() => {
    const author = await getAuthor();

    return request(app)
      .post('/api/v1/books')
      .send({
        authorId: author._id,
        title: 'I like big books and I cannot lie',
        genre: 'horror'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          authorId: author._id,
          title: 'I like big books and I cannot lie',
          genre: 'horror',
          __v: 0 
        });
      });
  });

});

