import mongoose from 'mongoose'

export {
    Flight
}

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {type:String, required: true, unique: true, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0, required: true, unique: true}
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    tickets: [ticketSchema],
    destinations: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
}, {
    timestamps: true,
})

const Flight = mongoose.model('Flight', flightSchema)