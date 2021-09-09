const router = require("express").Router();
let Blog = require("../models/blog.model");

router.route("/").get((req, res) => {
  Blog.find()
    .then((Blogs) => res.json(Blogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/newBlog").post((req, res) => {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const blog_image = req.body.blog_image;
  const shortCut = req.body.shortcut;
  const createdAt = req.body.createdAt;
  const blog = req.body.blog;

  const newBlog = new Blog({
    title,
    subtitle,
    blog_image,
    createdAt,
    shortCut,
    blog,
  });

  newBlog
    .save()
    .then(() => res.json("Blog added!"))
    .catch((err) => res.status(200).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Blog.findById(req.params.id)
    .then((Blog) => res.json(Blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateBlog/:id").post((req, res) => {
  Blog.findById(req.params.id)
    .then((Blog) => {
      Blog.title = req.body.title;
      Blog.subtitle = req.body.subtitle;
      Blog.blog_image = req.body.blog_image;
      Blog.createdAt = req.body.createdAt;
      Blog.shortCut = req.body.shortCut;
      Blog.blog = req.body.blog;

      Blog.save()
        .then(() => res.json("Blog updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
