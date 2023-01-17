const express = require('express');
const {getCinemas, getCinema, postCinemas, putCinemas, deleteCinemas} = require('../controllers/cinema.controller');
const router = express.Router();

router.get('/', getCinemas)
router.get('/:id', getCinema)
router.post('/', postCinemas)
router.put('/:id', putCinemas)
router.delete('/:id', deleteCinemas)

module.exports = router;