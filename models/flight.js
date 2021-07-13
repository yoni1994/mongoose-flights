import mongoose from 'mongoose'

export {
    Flight
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {type:String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0}
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    tickets: [ticketSchema]
}, {
    timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)