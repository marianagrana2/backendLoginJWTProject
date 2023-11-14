const Order = require("../models/ordersModel");

// Crear Order (CRUD) - Create
const createOrder = async (req, res) =>{
    try{
        const {body} = req;
        const order = new Order(body)
        await order.save()
        res.status(201).json({
            msg:"Pedido creado con éxito.",
            order
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al crear pedido.",
            error
        })
    }
}

// Leer Order (CRUD) - Read
const readOrder = async(req, res) =>{
    try{
        const queryParam = {active:true};
        const order = await Order.find(queryParam);
        res.status(200).json({
            order
        })

    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al leer pedidos.",
            error
        })
    }
}

// Actualizar Order (CRUD) - Update
const updateOrder = async(req, res) =>{
    try{
        const {params, body} = req;
        const {orderId} = params;

        await Order.findByIdAndUpdate(orderId, body)
        const orderToShow = await Order.findById(orderId)
        res.status(202).json({
            msg:"Pedido modificado con éxito.",
            orderToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al modificar el pedido.",
            error
        })
    }
}

// "Borrar" Order (CRUD) - Borrado Lógico - Delete
const deleteOrder = async(req,res) =>{
    try{
        const {orderId} = req.params;
        const deleteState = {"active": false};

        await Order.findByIdAndUpdate(orderId, deleteState);
        const orderToShow = await Order.findById(orderId);

        res.status(202).json({
            msg:"Se Borró el pedido.",
            orderToShow
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo Ocurrió al eliminar el pedido.",
            error
        })
    }
}

module.exports = {
    createOrder,
    readOrder,
    updateOrder,
    deleteOrder
}
