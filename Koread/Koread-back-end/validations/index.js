const Joi = require("joi");

const postCreateValidation = Joi.object({
  title: Joi.string().not("").required(),
  content: Joi.string().not("").required(),
  userId: Joi.forbidden(),
});

const postUpdateValidation = Joi.object({
  title: Joi.string().optional().not(""),
  content: Joi.string().optional().not(""),
  userId: Joi.forbidden(),
});

const commentCreateValidation = Joi.object({
  content: Joi.string().not("").required(),
  userId: Joi.number().required(),
  postId: Joi.forbidden(),
});

const commentUpdateValidation = Joi.object({
  content: Joi.string().not(""),
});

module.exports = {
  postCreateValidation,
  postUpdateValidation,
  commentCreateValidation,
  commentUpdateValidation,
};
