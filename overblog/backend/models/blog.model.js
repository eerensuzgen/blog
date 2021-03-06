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
    type: Object,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  shortCut: { type: String, required: "Boş Bırakılamaz" },
  blog: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  blogVideo: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
