import mongoose from 'mongoose'

export {
    Flight
}


// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    cast: [String],
    departs: Date
}, {
    timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)