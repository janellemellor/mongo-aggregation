const { getAuthor, getAuthors, getBooks } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

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

  it('gets all authors', async() => {
    const authors = await getAuthors();

    return request(app)
      .get('/api/v1/authors')
      .then(res => {
        expect(res.body).toEqual(authors);
      });
  });

  it('finds an author by id', async() => {
    const author = await getAuthor();
    const books = await getBooks({ authorId: author._id });

    return request(app)
      .get(`/api/v1/authors/${author._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...author,
          books
        });
      });
  });
  
  it('deletes an author', async() => {
    const author = await getAuthor();

    return request(app)
      .delete(`/api/v1/authors/${author._id}`)
      .then(res => {
        expect(res.body).toEqual(author);
      });
  });

});
