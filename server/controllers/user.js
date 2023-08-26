const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const ash = require('express-async-handler')

const registerUser = ash (async(req, res) => {
    const {name, email, password} = req.body

    //validate
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //hash pass
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPass
    })

    if(!user){
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })
})

const loginUser = ash (async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    //check if password is valid
    validPass = await bcrypt.compare(password, user.password)
    
    if(user && validPass){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getUser = ash (async(req, res) => {
    const {_id, name, email} = (req.user)
    res.status(200).json({
        name: name, 
        email: email, 
        id:_id
    })
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}