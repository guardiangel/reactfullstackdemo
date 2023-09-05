const express = require("express");
const router = express.Router();
const { User, PostTab, Like } = require("../models");
const { validateToken } = require("../middleware/AuathAccessToken");

router.post("/createLikes", validateToken, async (req, resp) => {
  const userId = req.user.id;
  const { PostTabId } = req.body;

  const like = await Like.findOne({
    where: {
      PostTabId: PostTabId,
      UserId: userId,
    },
  });

  if (like !== null) {
    resp.status(201).send("Likes exist, can't generate again.");
  } else {
    const result = await Like.create({
      PostTabId: PostTabId,
      UserId: userId,
    });

    resp.status(200).send("Create likes successfully.");
  }
});

router.post("/getLikes", validateToken, async (req, resp) => {
  const userId = req.user.id;
  const { PostTabId } = req.body;

  const like = await Like.findOne({
    where: {
      PostTabId: PostTabId,
      UserId: userId,
    },
  });

  resp.status(200).send(like);
});
router.post("/cancelLikes", validateToken, async (req, resp) => {
  const userId = req.user.id;
  const { PostTabId } = req.body;

  const result = await Like.destroy({
    where: {
      PostTabId: PostTabId,
      UserId: userId,
    },
  });

  resp.status(200).send(result + ""); // the result will be the affected number
});

module.exports = router;
