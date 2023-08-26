const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    setTitle: {
        type: String,
        trim: true,
        required: [true, 'Please provide a set title']
    },
    setDescr: {
        type: String,
        trim: true,
        required: [true, 'Please provide a description'],
        maxlength: [1000, 'Description can not be more than 1000 characters']
    },
    img: {
        type: String,
        default: 'https://cdn.crispedge.com/afc58c.png'
    },
    flashCards: {
        type: mongoose.Schema.Types.Mixed,
        required: [true, 'Please provide at least one term and definition']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('StudySet', SetSchema)