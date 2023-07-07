const ash = require('express-async-handler')

const getAllSets = ash( async(req, res) => {
    res.status(200).json({ msg: "get all sets" })
}) 

const getOneSet = ash( async(req, res) => {
    res.status(200).json({ msg: "get one set" })
})

const createSet = ash( async(req, res) => {
    res.status(200).json({ msg: "create all sets" })
})

const updateSet = ash( async(req, res) => {
    res.status(200).json({ msg: "update a set" })
})

const deleteSet = ash( async(req, res) => {
    res.status(200).json({ msg: "delete a set" })
})

module.exports = {
    getAllSets,
    getOneSet,
    createSet,
    updateSet,
    deleteSet
}