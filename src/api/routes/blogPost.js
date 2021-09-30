const router = require("express").Router();

// Import route logic functions from route controller
const {
  getBlogPosts,
  createBlogPost,
  editBlogPost,
  deleteBlogPost,
  selectBlogPost,
} = require("../controllers/blogPost");

router.route("/").get(getBlogPosts).post(createBlogPost);
router
  .route("/:id")
  .get(selectBlogPost)
  .put(editBlogPost)
  .delete(deleteBlogPost);

module.exports = router;
