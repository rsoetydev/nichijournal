const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: "defaultImage"
    },
    location: {
        type: String,
        default: "defaultLoc"
    },
    role: {
        type: String,
        default: "User"
    }
})

// static signup method
userSchema.statics.signup = async function (username, email, password) {

    // validation
    if (!username || !email || !password){
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Please enter a valid email address')
    }

    const emailExists = await this.findOne({ email })
    const userExists = await this.findOne({ username })

    if (emailExists) {
        throw Error('Email already in use')
    }

    if (userExists) {
        throw Error('Username already in use')
    }

    
    if (!validator.isStrongPassword(password)){
        throw Error('Please enter a stronger password')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ username, email, password: hash})

    return user
  
}

// static login method
userSchema.statics.login = async function(username, password) {

    if (!username || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({
        $or: [
            { username },
            { 'email' : username }
        ]
     })

     if (!user) {
        throw Error('Invalid login credentials')
     }

     const match = await bcrypt.compare(password, user.password)

     if (!match) {
        throw Error('Invalid login credentials')
     }

     return user

}

module.exports = mongoose.model('User', userSchema)