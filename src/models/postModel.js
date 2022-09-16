const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  post: String,
  desc: String,
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
