const Joi = require("joi");

const schema = Joi.object().keys({
    userName: Joi.string().min(3).max(30).required().messages({
        "string.base": "El nombre de usuario debe ser un string.",
        "string.empty":"El nombre de usuario no debe estar vacio.",
        "string.min":"El nombre de usuario debe tener un mínimo de {#limit} caracteres."
    }),
    email: Joi.string().email().required().messages({
        "string.email": "El campo email debe tener un formato válido.",
        "string.empty": "El campo email no debe estar vacio."
    }),
    phoneNumber: Joi.number().min(10).messages({
        "number.base": "El número de télefono debe ser un number.",
        "number.min":"El número de télefono debe tener un mínimo de {#limit} números."
    }),
    password: Joi.string().min(3).max(40).required().messages({
        "string.base": "La contraseña debe ser un string.",
        "string.empty": "La contraseña no debe estar vacia.",
        "string.min": "La contraseña debe tener un mínimo de {#limit} caracteres."
    }),
    orders: Joi.object(),
    userType: Joi.string()
})

const schemaProducts = Joi.object().keys({
    productName: Joi.string().min(3).max(40).required().messages({
        "string.base": "El nombre del producto debe ser un string.",
        "string.empty": "El nombre del producto no debe estar vacio.",
        "string.min": "El nombre del producto debe tener un mínimo de {#limit} caracteres."
    }),
    brandName: Joi.string(),
    description: Joi.string(),
    sku: Joi.number().min(1).required().messages({
        "number.base": "El SKU debe ser un number.",
        "number.min": "El SKU debe ser de al menos un número."
    }),
    price: Joi.number().required().messages({
        "number.empty": "El precio es requerido."
    })
})

module.exports = {schema, schemaProducts}