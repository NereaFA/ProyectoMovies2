const Cinema = require('../models/cinema.model');

const getCinemas = async(req, res) => {
    try {
        const cinemas = await Cinema.find();
        return res.status(200).json(cinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getCinema = async(req, res) => {
    try {
        const {id} = req.params;
        const cinemas = await Cinema.findById(id).populate('movies');
        
        return res.status(200).json(cinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postCinemas = async(req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putCinemas = async(req, res) => {
    try {
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
        
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true});
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteCinemas = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedCinema = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(deletedCinema);
    } catch (error) {
        
    }
}


module.exports = {getCinemas, getCinema, postCinemas, putCinemas, deleteCinemas}