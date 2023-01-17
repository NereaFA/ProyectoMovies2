const Movie = require('../models/movie.model')

const getMovies = async(req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postMovies = async(req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putMovies = async(req, res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        
        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMovies = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(deletedMovie);
    } catch (error) {
        
    }
}


module.exports = {getMovies, postMovies, putMovies, deleteMovies}