const express = require("express");
const router = express.Router();

//Don't refer to the specific file, such as ../models/PostModel guiquansun20230830
const { PostTab } = require("../models");

//handle the get request
router.get("/", (req, resp) => {
  //resp.json("Hello, world");
  resp.send("Hello, world");
});

router.get("/getAllPosts", async (req, resp) => {
  const allPosts = await PostTab.findAll();
  resp.send(allPosts);
});

router.post("/getPostById", async (req, resp) => {
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
  resp.send(specifiedPost);
});

router.post("/createPost", async (req, resp) => {
  const post = req.body;
  const returnResult = await PostTab.create(post);
  resp.json(returnResult);
});

module.exports = router;
