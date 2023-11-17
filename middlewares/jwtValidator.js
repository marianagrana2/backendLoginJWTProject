const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const validateJWT = async(req,res,next) => {
    const token = req.header("user-token")
    if(!token){
        return res.status(401).json({
            msg:"No hay token en la petición"
        })
    }
    try{
     const {id} = jwt.verify(token, process.env.JWT_SECRET)
     const user = await User.findById(id)

     if(!user){
        return res.status(401).json({
            msg:"Token no valido - Usuario no existe en la base de datos"
        })
     }
     req.user = user
     next()
    } catch(error){
        return res.status(401).json({
            msg:"Token no valido"
        })
    }
}

module.exports = {validateJWT}