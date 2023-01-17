const express = require('express');
const {getMovies, postMovies, putMovies, deleteMovies} = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', getMovies)
router.post('/', postMovies)
router.put('/:id', putMovies)
router.delete('/:id', deleteMovies)

module.exports = router;