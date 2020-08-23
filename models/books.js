const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
    author: {
        type: String,
        default: '',
        required: true
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    isbn: {
        type: Number,
        default: '',
        required: true
    },
    releaseDate: {
        type: Date,
        default: '',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: 'books'
});

module.exports = mongoose.model('books', bookSchema);