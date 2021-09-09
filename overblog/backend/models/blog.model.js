const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  subtitle: {
    type: String,
  },
  blog_image: {
    type: String,
    default: "default.jpg",
  },
  createdAt: {
    type: String,
  },
  shortCut: { type: String, required: "Boş Bırakılamaz" },
  blog: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("Blog", BlogSchema);