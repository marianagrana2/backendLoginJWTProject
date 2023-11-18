const {Router} = require("express");
const {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct 
} = require("../controllers/productsController")
const {celebrateValidatorProducts } = require("../middlewares/celebrateValidator")
const {validateJWT} = require("../middlewares/jwtValidator")

const router = Router();
//Rutas - CRUD (Create,Read,Update & Delete)
router.post("/", validateJWT, celebrateValidatorProducts,createProduct)
router.get("/",readProduct)
router.put("/:productId",validateJWT,updateProduct)
router.delete("/:productId",validateJWT,deleteProduct)


module.exports = router