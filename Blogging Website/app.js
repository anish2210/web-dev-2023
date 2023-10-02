//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://{Your MongoDB Atlas Username}:{Your MongoDB Atlas Password}/blogDB");

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

const homeStartingContent = "Welcome to Daily Journal - Your Source for Inspiration and Knowledge! Explore an array of captivating topics, from inspiring stories of resilience to cutting-edge science and technology. Discover wellness insights, travel adventures, and creative inspirations that enrich your life. Join our vibrant community, share your thoughts, and stay updated with our newsletter. Let's embark on this journey together, embracing the beauty of diversity and fostering personal growth. Spark your curiosity, ignite your creativity, and find fulfillment in our thought-provoking content. Thank you for being a part of our quest to inspire and enlighten. Happy reading!";
const aboutContent = "Unlock the World of Knowledge and Inspiration with Daily Journal Dive into a treasure trove of captivating content that spans across diverse topics. From thought-provoking articles on science, technology, and lifestyle, to heartwarming stories of personal growth and resilience, our blog offers something for every curious mind. Explore travel adventures, culinary delights, and artistry that fuels your creativity. Join our thriving community, engage in discussions, and stay informed with our enriching newsletter. Let's embark on a journey of discovery, inspiration, and mutual growth. Welcome to Daily Journal, where curiosity knows no bounds. Happy exploring!";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  Post.find({}).then(foundPosts => {
    res.render("home", {
    startingContent: homeStartingContent,
    posts: foundPosts
    });
  })
  
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){

  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  })

  post.save();
  res.redirect("/");

});

app.get("/posts/:postId", function(req, res){
  const requestedId = req.params.postId;

  Post.findOne({_id: requestedId}).then(post=>{
      res.render("post", {
        title: post.title,
        content: post.content
      });
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
