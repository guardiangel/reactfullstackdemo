const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

//register
router.post("/register", async (req, resp) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  //Verify if the current username exists in the database or not.
  //findAll return an array
  const existUser = await User.findAll({
    where: {
      username: username,
    },
  });

  if (existUser.length !== 0) {
    resp
      .status("201")
      .send("Current user is in the database, can't create again.");
  } else {
    const user = await User.create({
      username: username,
      password: hashPassword,
    });

    resp.status("200").send(user);
  }
});

//login
router.post("/login", async (req, resp) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!user) {
    resp.status("404").send("User doesn't exist");
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        resp.status("201").send("Wrong username and password");
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "accessToken"
        );
        resp.status("200").send(accessToken);
      }
    });
  }
});

module.exports = router;
