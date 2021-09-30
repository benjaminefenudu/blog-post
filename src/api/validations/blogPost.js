const Joi = require("joi");

// Create Blog Post Validation
exports.createPost = (blogPost) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    body: Joi.string().min(2).max(255).required(),
  }).unknown();

  return schema.validate(blogPost);
};

// Edit Blog Post Validation
exports.editPost = (blogPost) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    body: Joi.string().min(2).max(255).required(),
  }).unknown();

  return schema.validate(blogPost);
};
