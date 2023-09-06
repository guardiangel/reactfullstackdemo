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

router.post("/getAllPosts", async (req, resp) => {
  const allPosts = await PostTab.findAll();
  resp.send(allPosts);
});

router.get("/getAllPostsByUserId/:userId", async (req, resp) => {
  const userId = req.params.userId;
  const allPosts = await PostTab.findAll({
    where: {
      UserId: userId,
    },
  });
  resp.status(200).send(allPosts);
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

  resp.send({ specifiedPost: specifiedPost, num: likes.length });
});

router.post("/createPost", validateToken, async (req, resp) => {
  const post = req.body;

  const existUser = await User.findOne({
    where: {
      username: post.username,
    },
  });

  if (!existUser) {
    resp
      .status(201)
      .send("Couldn't find user based on the username. Please try again.");
  } else {
    post.UserId = existUser.id;
    const returnResult = await PostTab.create(post);
    resp.status(200).json(returnResult);
  }
});

module.exports = router;
