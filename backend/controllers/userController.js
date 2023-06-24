/**TAC SERVICE BOOKING APP BACKEND USER CONTROLLER FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/* Importing the user database Schema Model into the user controller file */
const User = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

/* USER SIGN-UP CONTROLLER FUNCTION */
const userSignUp = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.signup(email, password, role);

    // generating a json web token (jwt)
    const token = createToken(user._id);

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/* USER LOGIN CONTROLLER FUNCTION */
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // generating a json web token (jwt)
    const token = createToken(user._id);

    const role = user.role;

    res.status(200).json({ email, token, role });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { userSignUp, userLogin };

/**REFERENCES**/
/*
Referenced a YouTube video for more information on how to apply Authentication with JWT to this MERN stack application.
"MERN Authentication Tutorial." YouTube uploaded by The Net Ninja, 19 July 2022, <https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT>
*/
