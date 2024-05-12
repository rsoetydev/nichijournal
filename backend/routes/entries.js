const express = require('express')
const {
    createEntry,
    getEntry,
    getEntries
} = require('../controllers/entryController')

const router = express.Router()

// GET all journal entries
router.get('/', getEntries)

// GET a single journal entry
router.get('/:id', getEntry)

// POST a journal entry
router.post('/', createEntry)

// DELETE a journal entry
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete'})
})

// UPDATE a journal entry
router.patch('/:id', (req, res) => {
    res.json({mssg: 'patch'})
})





module.exports = router