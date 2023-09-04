const express = require("express");
const router = express.Router();
const { Comment } = require("../models");
const { validateToken } = require("../middleware/AuathAccessToken");

router.post("/getCommentsByPostId", validateToken, async (req, resp) => {
  const post = req.body;
  //the below statement also works
  const comments = await Comment.findAll({
    where: {
      PostTabId: post.PostTabId,
    },
  });

  resp.send(comments);
});

router.post("/createComments", validateToken, async (req, resp) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  const result = await Comment.create(comment);
  resp.json(result);
});

router.post("/deleteCommentById", validateToken, async (req, resp) => {
  const id = req.body.id;
  const result = await Comment.destroy({
    where: {
      id: id,
    },
  });

  resp.json(result);
});

module.exports = router;
