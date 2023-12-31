const { verify } = require("jsonwebtoken");

const validateToken = (req, resp, next) => {
  const accessToken = req.header("accessToken");
  // console.log("accessToken==" + accessToken);
  if (!accessToken) {
    return resp.status(201).send("User doesn't login in, please login again.");
  }

  try {
    const token = verify(accessToken, "accessToken"); //The second param is defined in the UserRoute.js
    //console.log(token)// Should be  { username: user.username, id: user.id }, which is set in the UserRoute.js
    req.user = token;
    //If it's a valid token
    if (token) {
      return next();
    }
  } catch (error) {
    resp.send(error);
  }
};

module.exports = { validateToken };
