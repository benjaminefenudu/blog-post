const mongoose = require("mongoose");
const { Schema } = mongoose;

// BLOG POST MODEL
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 255,
  },
  body: {
    type: String,
    required: true,
    max: 255,
  },
});

module.exports = mongoose.model("blogPost", blogPostSchema);
