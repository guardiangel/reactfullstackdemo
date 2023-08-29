const express = require("express");
const app = express();

const cors = require("cors");

const port = 3001;
app.listen(port, () => {
  console.log("Server listen at " + port);
});

app.use(cors());
