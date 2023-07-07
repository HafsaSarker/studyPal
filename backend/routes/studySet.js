const express = require('express')
const router = express.Router()

const {
    getAllSets,
    getOneSet,
    createSet,
    updateSet,
    deleteSet
} = require('../controllers/studySet')

router.route('/').get(getAllSets)
router.route('/:id').get(getOneSet)
router.route('/createSet').post(createSet)
router.route('/:id').patch(updateSet)
router.route('/:id').delete(deleteSet)

module.exports = router