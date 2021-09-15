const express = require("express");
const blogs = require("./blog.routes");
const admins = require("./admin.routes");

const router = express.Router();

router.use("/blogs", blogs);
router.use("/admins", admins);

module.exports = router;
