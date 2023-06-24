/**TAC SERVICE BOOKING APP - AUTHENTICATION MIDDLEWARE FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

/* Verification and Middleware functions to verify and authenticate the user */

const requireAuth = async (req, res, next) => {
  // Authorization Header - verify if user is authenticated (should contain our json web token [jwt]).
  const { authorization } = req.headers;

  // Check whether the Authorization Header has a value. If not, return an error.
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // Authorization Header value is a string. To get the jwt portion, we define this command.
  const token = authorization.split(" ")[1];

  // Verify the jwt using the jwt package - returns the payload from that token.
  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is NOT AUTHORIZED" });
  }
};

module.exports = requireAuth;

/**REFERENCES**/
/*
Referenced a YouTube video for more information on how to apply Authentication with JWT to this MERN stack application.
"MERN Authentication Tutorial." YouTube uploaded by The Net Ninja, 19 July 2022, <https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT>
*/
