const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }, 
  title: {
    type: String, 
    required: true
  }, 
  genre: {
    type: String, 
    required: true
  }
});

schema.statics.topGenres = function() {
  return this
    .aggregate([
      [
        {
          '$group': {
            '_id': '$genre', 
            'count': {
              '$sum': 1
            }
          }
        }, {
          '$sort': {
            'count': -1
          }
        }, {
          '$limit': 3
        }
      ]
    ]);
};

module.exports = mongoose.model('Book', schema);
