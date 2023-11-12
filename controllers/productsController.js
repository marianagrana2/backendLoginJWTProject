const {response, request } = require("express");
const Product = require("../models/productsModel");

// Crear Product (CRUD) - Create
const createProduct = async (req = request, res = response) =>{
    try{
        const {body} = req;
        const product = new Product(body)
        await product.save()
        res.status(201).json({
            msg:"Producto creado con éxito.",
            product
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al crear producto.",
            error
        })
    }
}

// Leer Product (CRUD) - Read
const readProduct = async(req = request, res = response) =>{
    try{
        const queryParam = {active:true};
        const product = await Product.find(queryParam);
        res.status(200).json({
            product
        })

    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al leer productos.",
            error
        })
    }
}

// Actualizar Product (CRUD) - Update
const updateProduct = async(req, res) =>{
    try{
        const {params, body} = req;
        const {productId} = params;

        await Product.findByIdAndUpdate(productId, body)
        const productToShow = await Product.findById(productId)
        res.status(202).json({
            msg:"Producto modificado con éxito.",
            productToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al modificar el registro.",
            error
        })
    }
}

// "Borrar" Product (CRUD) - Borrado Lógico - Delete
const deleteProduct = async(req,res) =>{
    try{
        const {productId} = req.params;
        const deleteState = {"active": false};

        await Product.findByIdAndUpdate(productId, deleteState);
        const productToShow = await Product.findById(productId);

        res.status(202).json({
            msg:"Se Borró el registro.",
            productToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al eliminar el registro.",
            error
        })
    }
}

module.exports = {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct

}