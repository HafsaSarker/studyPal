const StudySet = require('../models/StudySet')
const User = require('../models/User')

const ash = require('express-async-handler')

const getAllSets = ash( async(req, res) => {
    const allSets = await StudySet.find({ user:req.user.id })
    res.status(200).json({ allSets })
}) 

const getOneSet = ash( async(req, res) => {
    const {id} = req.params
    const studySet = await StudySet.findOne({_id:id})

    if(!studySet){
        return res.status(404).json({msg: `No study set with id: ${id}`})
    }

    res.status(200).json({ studySet })
})

const createSet = ash( async(req, res) => {
    const {setTitle, setDescr, img, flashCards} = req.body

    if(!setTitle || !setDescr || !flashCards){
        res.status(400)
        throw new Error('Please add all required fields')
    }

    const newStudySet = await StudySet.create({
        setTitle, 
        setDescr, 
        img, 
        flashCards,
        user:req.user.id 
    })
    
    res.status(200).json({ newStudySet })
})

const updateSet = ash( async(req, res) => {
    const {id} = req.params

    const studySet = await StudySet.findById(id)

    if(!studySet){
        return res.status(404).json({message: `No study set with id: ${id}`})
    }

    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //check if logged in user is the one that created the studySet
    if(studySet.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    if(req.body.img === ''){
        req.body.img = studySet.img
    }

    const updatedStudySet = await StudySet.findByIdAndUpdate({_id:id}, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({ updatedStudySet })
})

const deleteSet = ash( async(req, res) => {
    const {id} = req.params

    const studySet = await StudySet.findById(id)

    if(!studySet){
        return res.status(404).json({message: `No study set with id: ${id}`})
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    //check if logged in user is the one that created the studySet
    if(studySet.user.toString() !== user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    await StudySet.findOneAndDelete({_id:id})

    res.status(200).json({ success: 'true' })
})

module.exports = {
    getAllSets,
    getOneSet,
    createSet,
    updateSet,
    deleteSet
}