const Joi = require("joi");


const updateSchema = Joi.object().keys({
    name:Joi.string(),
    email:Joi.string(),
    phone:Joi.string()
  })

module.exports = updateSchema;