const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const moviesRouter = require('./src/api/routes/movie.routes');
const cinemasRouter = require('./src/api/routes/cinema.routes');

const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/movies', moviesRouter)
app.use('/cinemas', cinemasRouter)
app.listen(PORT, () => console.log('listening on port ', PORT));