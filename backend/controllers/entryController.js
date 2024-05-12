const Entry = require('../models/entryModel')
const mongoose = require('mongoose')

// get all entries
const getEntries = async (req, res) => {
    const entries = await Entry.find({}).sort({ createdAt: -1 })

    res.status(200).json(entries)
}


// get a single entry
const getEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No entry found'})
    }

    const entry = await Entry.findById(id)

    if (!entry){
        return res.status(404).json({error: 'No entry found'})
    }

    res.status(200).json(entry)
}

// create an entry
const createEntry = async (req, res) => {
    const {body, date, image} = req.body

    try {
        const entry = await Entry.create({ body, date, image })
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete an entry


// update an entry



module.exports = {
    createEntry,
    getEntry,
    getEntries
}