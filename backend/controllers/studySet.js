const StudySet = require('../models/StudySet')
const ash = require('express-async-handler')

const getAllSets = ash( async(req, res) => {
    const allSets = await StudySet.find({})
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
    const newStudySet = await StudySet.create(req.body)
    
    res.status(200).json({ newStudySet })
})

const updateSet = ash( async(req, res) => {
    const {id} = req.params

    const studySet = await StudySet.findById(id)

    if(!studySet){
        return res.status(404).json({message: `No study set with id: ${id}`})
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