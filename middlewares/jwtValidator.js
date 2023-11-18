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

     const isAdmin = user.userType === "admin"
     
     if(isAdmin){
        req.user = user
        next();
         return
     } else{
         return res.status(403).json({
             msg: "El usuario no es administrador."
         })
     }
     
    } catch(error){
        return res.status(401).json({
            msg:"Token no valido"
        })
    }
   
}

module.exports = {validateJWT}