const {Router} = require('express');

const {registerUser, loginUser} = require("../controllers/registerController")
const {celebrateValidator} = require("../middlewares/celebrateValidator");


const router = Router()
router.post("/register",celebrateValidator , registerUser);
router.post("/login", loginUser);

module.exports = router