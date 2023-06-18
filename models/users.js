const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
});

module.exports = {
  userSchema,
};
