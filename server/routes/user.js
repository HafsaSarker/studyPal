const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");

const { registerUser, loginUser, getUser } = require("../controllers/user");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/userData", protect, getUser);

module.exports = router;
