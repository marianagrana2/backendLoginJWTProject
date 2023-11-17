const {Router} = require("express");
const {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct 
} = require("../controllers/productsController")
const {celebrateValidatorProducts } = require("../middlewares/celebrateValidator")

const router = Router();
//Rutas - CRUD (Create,Read,Update & Delete)
router.post("/", celebrateValidatorProducts,createProduct)
router.get("/",readProduct)
router.put("/:productId",updateProduct)
router.delete("/:productId",deleteProduct)


module.exports = router