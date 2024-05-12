require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const entryRoutes = require('./routes/entries')


// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/entries', entryRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listens for requests to the database
    app.listen(process.env.PORT, () => {
      console.log('listening on port ' + process.env.PORT)
    })
})
.catch((error) => {
  console.log(error)
})


