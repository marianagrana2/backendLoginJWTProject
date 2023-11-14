const {Schema, model } = require('mongoose');

const OrderSchema = new Schema({
   userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
   },
   // productId:{
        
   // }
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
//REVISAR ESTO DE ABAJO
OrderSchema.pre('save', async function(next){
    if(!this.userId){
        const defaultUser = await Order.findOne({userName:"Test"})
        this.userId = defaultUser._id
    }
    next();
})
module.exports = model("Order", OrderSchema)