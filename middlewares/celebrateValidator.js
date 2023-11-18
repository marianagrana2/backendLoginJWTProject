const {celebrate, Segments} = require("celebrate");
const {schema, schemaProducts} = require("../validators/userValidator");


const celebrateValidator = celebrate({[Segments.BODY]:schema});
const celebrateValidatorProducts = celebrate({[Segments.BODY]: schemaProducts});

module.exports = {celebrateValidator,celebrateValidatorProducts}