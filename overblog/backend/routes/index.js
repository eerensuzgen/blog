const express = require("express");
const blogs = require("./blog.routes");

const router = express.Router();

router.use("/blogs", blogs);

module.exports = router;
