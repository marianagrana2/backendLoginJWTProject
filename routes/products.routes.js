const {Router} = require("express");
const {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct 
} = require("../controllers/productsController")

const router = Router();
//Rutas - CRUD (Create,Read,Update & Delete)
router.post("/",createProduct)
router.get("/",readProduct)
router.put("/:productId",updateProduct)
router.delete("/:productId",deleteProduct)


module.exports = router