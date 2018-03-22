const Joi = require('joi');

const signinBodySchema = {
  body: {
    loginName: Joi.string().required(),
    password: Joi.string().min(4).required()
  }
};

const signupBodySchema = {
  body: {
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    password: Joi.string().min(4).required(),
    confirmation: Joi.string().min(4).required()
  }
};

module.exports = {
  signinBodySchema: signinBodySchema,
  signupBodySchema: signupBodySchema
};
