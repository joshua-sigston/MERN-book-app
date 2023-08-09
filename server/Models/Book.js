const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    required: Date.now()
  },
});

module.exports = mongoose.model('Book', BookSchema)