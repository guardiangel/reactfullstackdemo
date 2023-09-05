const express = require("express");
const router = express.Router();
const { validateToken } = require("../middleware/AuathAccessToken");

//Don't refer to the specific file, such as ../models/PostModel guiquansun20230830
const { PostTab, User, Like } = require("../models");

//handle the get request
router.get("/", (req, resp) => {
  //resp.json("Hello, world");
  resp.send("Hello, world");
});

router.post("/getAllPosts", validateToken, async (req, resp) => {
  const allPosts = await PostTab.findAll();
  resp.send(allPosts);
});

router.post("/getPostById", validateToken, async (req, resp) => {
  const post = req.body;
  //the below statement also works
  /*  const specifiedPost = await PostTab.findAll({
    where: {
      id: post.id,
    },
  }); */
  //const specifiedPost = await PostTab.findByPk(post.id);
  const specifiedPost = await PostTab.findOne({
    where: {
      id: post.id,
    },
  });

  const likes = await Like.findAll({
    where: {
      PostTabId: post.id,
    },
  });

  console.log("likes====" + likes.length);

  resp.send({ specifiedPost: specifiedPost, num: likes.length });
});

router.post("/createPost", validateToken, async (req, resp) => {
  const post = req.body;

  const userNameExistFlag = await User.findOne({
    where: {
      username: post.username,
    },
  });

  if (!userNameExistFlag) {
    resp
      .status(201)
      .send("Couldn't find user based on the username. Please try again.");
  } else {
    const returnResult = await PostTab.create(post);
    resp.status(200).json(returnResult);
  }
});

module.exports = router;
