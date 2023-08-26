const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: [true, 'please add a name']
    },
    email: {
        type: String,
        require: [true, 'please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)