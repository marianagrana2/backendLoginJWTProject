const {Router} = require("express");
const {
    createUser,
    readUser,
    updateUser,
    deleteUser
} = require("../controllers/usersController");

const router = Router();
//Rutas - CRUD (Create,Read,Update & Delete)
router.post("/",createUser)
router.get("/",readUser)
router.put("/:userId", updateUser)
router.delete("/:userId", deleteUser)


module.exports = router