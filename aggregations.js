require('dotenv').config();
require('./lib/utils/connect')();
const Book = require('./lib/models/Book');
const Author = require('./lib/models/Author');

Book
  .topGenres()
  .then(topGenres => console.log(topGenres));

Author
  .mostBooks()
  .then(mostBooks => console.log(mostBooks));
