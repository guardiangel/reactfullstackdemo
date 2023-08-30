const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
app.use(cors());
app.use(express.json());

//Routers
const postRouter = require("./routes/PostModelRoute");
app.use("/posts", postRouter); //transfer the request path "/posts" to the PostsRoutes endpoint.

db.sequelize.sync().then(() => {
  const port = 3001;
  app.listen(port, () => {
    console.log("Server listen at " + port);
  });
});
