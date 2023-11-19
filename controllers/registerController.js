const {response, request} = require("express");
const User = require("../models/usersModel");
const Order = require("../models/ordersModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Registro Usuario con Hash en la contrasenia
const registerUser = async (req = request, res = response) =>{
    try{
        const {userName, password, email, userType} = req.body
        const user = await User.findOne({userName})

        if(!user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hashSync(password, salt)
            const user = new User({userName, email, userType, password: hashedPassword})
            await user.save()
            
            res.status(201).json({
                msg:"El usuario fue creado correctamente."
            })
        } else{
            res.status(403).json({
                msg:"El nombre de usuario ya existe."
            })
        }
    }catch(error){
        res.status(500).json({
            msg:"Algo ocurrió al crear usuario.",
            error
        })
    }
}

// Login usuario ya registrado anteriormente y al hacer login se crea su token.
const loginUser = async (req = request, res = response) => {
    const {userName, password } = req.body;

    const user = await User.findOne({userName})
    if(!user){
        return res.status(403).json({
            msg:"El usuario no fue encontrado."
        })
    }
    // Muestra sus orders a los usuarios tipo customer 
    const orders = user.userType === "customer" ? await Order.find({orderUser: user._id}) : [];

    const correctPassword = bcrypt.compareSync(password, user.password)

    if(correctPassword){
        const token = jwt.sign({id: user._id, userName: user.userName},process.env.JWT_SECRET)
        res.status(200).json({
            msg:"¡Bienvenido(a)!",
            token,
            orders
        })
    } else{
        res.status(403).json({
            msg:"La contraseña no es correcta."
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}