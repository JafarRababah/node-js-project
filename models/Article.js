const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  body: String,
  numerOfLikes: Number,
});

const Article = mongoose.model("Articles", articleSchema);
module.exports = Article;
