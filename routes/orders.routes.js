const {Router} = require("express");

const {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/ordersController");

const router = Router()

router.post("/",createOrder);
router.get("/",readOrder);
router.put("/:orderId", updateOrder);
router.delete("/orderId", deleteOrder);

module.exports = router 