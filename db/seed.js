const Book = require('../lib/models/Book');
const Author = require('../lib/models/Author');
const chance = require('chance').Chance();

module.exports = async({ authorsToCreate = 5, booksToCreate = 100 } = {}) => {
  const authorNames = ['Nayyirah Waheed', 'Adrienne Marie Brown', 'Audre Lorde', 'Chimamanda Ngozi Adichie', 'Yaa Gyasi'];

  const genres = ['horror', 'fiction', 'nonfiction', 'scifi'];

  const authors = await Author.create([...Array(authorsToCreate)].map(()=> ({
    name: chance.pickone(authorNames)
  })));
  
  await Book.create([...Array(booksToCreate)].map(() => ({
    authorId: chance.pickone(authors)._id,
    title: chance.sentence(),
    genre: chance.pickone(genres)
  })));
};
