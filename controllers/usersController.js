const {response, request} = require("express");
const User = require("../models/usersModel");

// Crear User (CRUD) - Create
const createUser = async(req = request, res = response) =>{
    try{
        const {body} = req;
        const user = new User(body)
        await user.save()

        res.status(201).json({
        msg:"Usuario creado con éxito.",
        user
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al crear usuario.",
            error
        })
    }
}

// Leer User (CRUD) - Read
const readUser = async(req, res) =>{
    try{
        const queryParam = {active:true};
        const user = await User.find(queryParam).populate("orders")
        res.status(200).json({
            user
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al leer los usuarios.",
            error
        })
    }
}

// Actualizar User (CRUD) - Update
const updateUser = async(req, res) =>{
    try{
        const {params, body} = req;
        const {userId} = params;

        await User.findByIdAndUpdate(userId, body)
        const userToShow = await User.findById(userId)
        res.status(202).json({
            msg:"Usuario modificado con éxito.",
            userToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al modificar el registro.",
            error
        })
    }
}

// "Borrar" User (CRUD) - Borrado Lógico - Delete
const deleteUser = async(req,res) =>{
    try{
        const {userId} = req.params;
        const deleteState = {"active": false};

        await User.findByIdAndUpdate(userId, deleteState);
        const userToShow = await User.findById(userId);

        res.status(202).json({
            msg:"Se Borró el registro.",
            userToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al eliminar el registro.",
            error
        })
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}