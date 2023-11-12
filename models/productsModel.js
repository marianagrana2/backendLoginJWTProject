const {Schema, model } = require("mongoose");

// Schema Product 
const ProductSchema = Schema ({
    productName:{
        type:String,
        required: [true, "El nombre de producto es requerido."],
        unique: true
    },
    brandName:{
        type:String
    },
    description:{
        type:String
    },
    sku:{
        type:Number,
        required: [true, "El SKU del producto es requerido."],
        unique: true
    },
    price:{
        type:Number, 
        required: [true, "El precio del producto es requerido."]
    },
    active:{
        type:Boolean,
        default:true
    }

})

module.exports = model('Product', ProductSchema)