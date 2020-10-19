const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false
    },
    comments: [{message: String}],
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model('book', bookSchema);