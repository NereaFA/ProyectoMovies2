
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {
        nombre:{type: 'string', required: true},
        name: { type: 'string', required: true },
        location: { type: 'string', required: true },
        movies: [{ type: Schema.Types.ObjectId, ref: 'cinema' }],
    },
    {
        timestamps:true
    }
)

const Cinema = mongoose.model('cinema', cinemaSchema);

module.exports = Cinema;