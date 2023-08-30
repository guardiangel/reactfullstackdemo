const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

db.sequelize.sync().then(() => {
  const port = 3001;
  app.listen(port, () => {
    console.log("Server listen at " + port);
  });
});

app.use(cors());
