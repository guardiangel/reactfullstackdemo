const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

//Fix the "Access-Control-Allow-Original" access issue
app.use(cors());
app.use(express.json());

//Routers
const postRouter = require("./routes/PostModelRoute");
app.use("/posts", postRouter); //transfer the request path "/posts" to the PostsRoutes endpoint.

const commentRouter = require("./routes/CommentModelRoute");
app.use("/comments", commentRouter);

const likeRouter = require("./routes/LikeModelRoute");
app.use("/likes", likeRouter);

const userRouter = require("./routes/UserRoute");
app.use("/user", userRouter);

db.sequelize.sync().then(() => {
  const port = 3001;
  app.listen(port, () => {
    console.log("Server listen at " + port);
  });
});
