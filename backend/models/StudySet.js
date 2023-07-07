const mongoose = require('mongoose')

const CardsSchema = new mongoose.Schema({
    cardNum: Number,
    term: {
        type: String,
        trim: true,
        required: [true, 'Please provide a flashcard term']
    },
    definition: {
        type: String,
        trim: true,
        required: [true, 'Please provide a definition for this term']
    }
})

const SetSchema = new mongoose.Schema ({
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
        default: 'https://www.pngitem.com/pimgs/m/25-254660_transparent-flashcards-clipart-flashcard-png-png-download.png'
    },
    flashCards: [CardsSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('StudySet', SetSchema)