const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: 'string', required: true },
    director: { type: 'string', required: true },
    year: { type: 'number' },
    genre: { type: 'string', required: true },
},{
    timestamps: true
})

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
