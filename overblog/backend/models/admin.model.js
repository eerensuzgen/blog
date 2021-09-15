const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  password: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
