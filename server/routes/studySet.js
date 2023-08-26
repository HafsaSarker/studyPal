const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const {
  getAllSets,
  getOneSet,
  createSet,
  updateSet,
  deleteSet,
} = require("../controllers/studySet");

router.route("/").get(protect, getAllSets);
router.route("/:id").get(protect, getOneSet);
router.route("/createSet").post(protect, createSet);
router.route("/:id").patch(protect, updateSet);
router.route("/:id").delete(protect, deleteSet);

module.exports = router;
