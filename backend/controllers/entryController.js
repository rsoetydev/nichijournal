const Entry = require('../models/entryModel')
const mongoose = require('mongoose')

// get all entries
const getEntries = async (req, res) => {
    const user_id = req.user._id
    console.log("in entries")

    const entries = await Entry.find({ user_id }).sort({ createdAt: -1 })

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
    const {en_text, jp_text, date, image} = req.body

    let emptyFields = []

    if(!en_text) {
        emptyFields.push('english text')
    }
    if(!jp_text) {
        emptyFields.push('japanese text')
    }
    if(emptyFields.length > 0 ) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const user_id = req.user._id
        const entry = await Entry.create({en_text, jp_text, date, image, user_id})
        res.status(200).json(entry)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// delete an entry
const deleteEntry = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No entry found'})
    }

    const entry = await Entry.findOneAndDelete({ _id: id })

    if (!entry){
        return res.status(404).json({error: 'No entry found'})
    }

    res.status(200).json(entry)
}


// update an entry
const updateEntry = async (req, res) => {
    const { id } = req.params
    const { en_text, jp_text} = req.body
    let emptyFields = []

    if(!en_text) {
        emptyFields.push('english text')
    }
    if(!jp_text) {
        emptyFields.push('japanese text')
    }
    if(emptyFields.length > 0 ) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No entry found'})
    }

    const entry = await Entry.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if (!entry){
        return res.status(404).json({error: 'No entry found'})
    }

    res.status(200).json(entry)
  
}



module.exports = {
    createEntry,
    getEntry,
    getEntries,
    deleteEntry,
    updateEntry
}