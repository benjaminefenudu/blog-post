const router = require("express").Router();

// Import route logic functions from route controller
const {
  getBlogPosts,
  createBlogPost,
  editBlogPost,
  deleteBlogPost,
} = require("../controllers/blogPost");

router
  .route("/")
  .get(getBlogPosts)
  .post(createBlogPost)
  .put(editBlogPost)
  .delete(deleteBlogPost);

module.exports = router;
