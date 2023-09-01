const express = require("express");
const router = express.Router();
const { Comment } = require("../models");

router.post("/getCommentsByPostId", async (req, resp) => {
  const post = req.body;
  //the below statement also works
  const comments = await Comment.findAll({
    where: {
      PostTabId: post.PostTabId,
    },
  });

  resp.send(comments);
});

router.post("/createComments", async (req, resp) => {
  const comment = req.body;
  const result = await Comment.create(comment);
  resp.json(result);
});

module.exports = router;
