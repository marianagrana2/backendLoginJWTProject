const {Schema, model } = require("mongoose");
// Schema de user (Elementos que va a tener el user)
const UserSchema = Schema ({
    userName:{
        type:String,
        required: [true, "El nombre de usuario es requerido."],
        unique: true
    },
    email:{
        type:String,
        required: [true, "El email es requerido"],
        unique: true
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String,
        required: [true, "El password es requerido"]
    },
    // sales:{
        //type:String,
    //}
    userType:{
        type:String,
    },
    active:{
        type:Boolean,
        default:true
    }
    


})

module.exports = model('User', UserSchema)