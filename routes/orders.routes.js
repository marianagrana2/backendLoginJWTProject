const {Router} = require("express");

const {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/ordersController");
const {validateJWT} = require("../middlewares/jwtValidator");
const { validate } = require("../models/usersModel");
const router = Router()

router.post("/",validateJWT,createOrder);
router.post("/order/:userId", validateJWT, createOrder);
router.get("/",readOrder);
router.put("/:orderId", validateJWT,updateOrder);
router.delete("/orderId",validateJWT, deleteOrder);

module.exports = router 