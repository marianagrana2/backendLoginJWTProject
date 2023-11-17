const {Schema, model } = require('mongoose');

const OrderSchema = new Schema({
   orderUser:{
        type: Schema.Types.ObjectId,
        ref: "User",
   },
   products:[{
        type: Schema.Types.ObjectId,
        ref:"Product",
   }],
   totalNoProducts:{
    type:Number
   },
   price:{
    type:Number
   },
   total:{
    type:Number
   },
   active:{
    type:Boolean,
    default:true
   }
})

module.exports = model("Order", OrderSchema)