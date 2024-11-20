const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Article = require("./models/Article");
mongoose
  .connect(
    "mongodb+srv://j3frrababah:0WxHLrGjWoC8Jtyg@cluster0.mwmdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Coennected succefully");
  })
  .catch((error) => {
    console.log("error with connecting jafar", error);
  });
//mongodb+srv://j3frrababah:0WxHLrGjWoC8Jtyg@cluster0.mwmdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.use(express.json());
/*app.get("/hello", (reg, res) => {
  res.send("hello");
});
app.get("/hi", (reg, res) => {
  res.send("your visit hi");
});*/
app.post("/articles", async (req, res) => {
  const newArticles = new Article();
  const artTitle = req.body.articleTitle;
  const artBody = req.body.articleBody;
  // res.send(artTitle + "  " + artBody);
  newArticles.title = artTitle;
  newArticles.body = artBody;
  newArticles.numerOfLikes = 0;
  await newArticles.save();
  res.json(newArticles);
});
app.get("/articles", async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
});
app.get("/showArticles", async (req, res) => {
  //const articles = await Article.find();
  res.render("articles.ejs");
});
app.get("/articles/:articleId", async (req, res) => {
  const id = req.params.articleId;
  const article = await Article.findById(id);

  res.json(article);
});
app.delete("/articles/:articleId", async (req, res) => {
  const id = req.params.articleId;
  const article = await Article.findByIdAndDelete(id);

  res.json(article);
});
app.listen(3000, () => {
  console.log("I am listining in port 3000");
});
app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 0; i <= 100; i++) {
    numbers += i + " - ";
  }
  //res.send(`the numbers are: ${numbers}`);
  //res.send(__dirname + "/views/numbers.html");
  res.render("numbers.ejs", {
    name: "te",
    numbers: numbers,
  });
});
