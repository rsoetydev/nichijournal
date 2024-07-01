const express = require('express')
const {
    uploadFiles,
} = require('../controllers/entryController')
const requireAuth = require('../middleware/requireAuth')

//require auth for all entry routes
const router = express.Router()

router.use(requireAuth)

// GET a single photo
router.get('/image/:id', getImage)

// POST a photo
router.post('/image/', uploadImage)

// DELETE a photo
router.delete('/image/:id', deleteImage)


// UPDATE a photo
router.patch('/image/:id', updateImage)






module.exports = router