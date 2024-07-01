const mongoose = require('mongoose')

const Schema = mongoose.Schema

const entrySchema = new Schema({
    en_text: {
        type: String,
        required: true
    },
    jp_text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Entry', entrySchema)