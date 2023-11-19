const User = require("../models/usersModel");

const authCustomer = async(req,res,next) =>{
    if(req.user.isAdmin){
        next();
    } else if (req.user._id.equals(req.params.userId)){
        next();
    } else {
        res.status(403).json({
            msg:"Acceso denegado. Solo los administradores pueden crear ordenes para otros usuarios."
        })
    }
}

module.exports = { authCustomer}