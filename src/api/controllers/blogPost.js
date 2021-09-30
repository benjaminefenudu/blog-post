const BlogPost = require("../models/blogPost");
const blogPostValidation = require("../validations/blogPost");

// CREATE BLOG POST
exports.createBlogPost = async (req, res) => {
  try {
    // validate before creating new blog post
    const { error } = blogPostValidation.createPost(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // save new blog post
    const blogPost = new BlogPost({ ...req.body });
    await blogPost.save();

    res
      .status(201)
      .json({ status: "success", msg: "New Blog Post Created.", blogPost });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// GET ALL BLOG POSTS
exports.getBlogPosts = async (req, res) => {
  try {
    const blogPost = await BlogPost.find();
    if (blogPost.length === 0)
      return res.status(200).json({
        status: "success",
        msg: "There are no blog posts!",
      });
    res.json({ blogPost });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// EDIT BLOG POST
exports.editBlogPost = async (req, res) => {
  try {
    let blogPost = await BlogPost.findOne({ _id: req.params.id });
    if (!blogPost)
      return res.status(404).json({
        status: "failed",
        msg: `Blog post not found!`,
      });

    // Limit blog post changes via this route to only the following
    const { title, body } = req.body;

    // User can update or leave out any of these fields
    if (title) blogPost.title = title;
    if (body) blogPost.body = body;
    await blogPost.save();

    res.status(200).json({
      status: "success",
      msg: "Blog post has been updated",
      blogPost,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

// DELETE BLOG POST
exports.deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);

    if (!blogPost)
      return res.status(404).json({
        status: "failed",
        msg: `Blog post not found!`,
      });
    res.status(200).json({
      status: "success",
      msg: `Blog post successfully deleted.`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
