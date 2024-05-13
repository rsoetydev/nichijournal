const express = require('express')
const {
    createEntry,
    getEntry,
    getEntries,
    deleteEntry,
    updateEntry
} = require('../controllers/entryController')

const router = express.Router()

// GET all journal entries
router.get('/', getEntries)

// GET a single journal entry
router.get('/:id', getEntry)

// POST a journal entry
router.post('/', createEntry)

// DELETE a journal entry
router.delete('/:id', deleteEntry)


// UPDATE a journal entry
router.patch('/:id', updateEntry)






module.exports = router