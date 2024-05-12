const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true})

module.exports = mongoose.model('Entry', entrySchema)