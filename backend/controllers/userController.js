/** TAC SERVICE BOOKING APP BACKEND USER CONTROLLER FILE **/

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/* Importing the user database Schema Model into the user controller file */
const User = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

/* CREATE USER ACCOUNT CONTROLLER FUNCTION */
const userCreateAcc = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.createAcc(firstName, lastName, email, password);

    // generating a json web token (jwt)
    const token = createToken(user._id);

    res.status(200).json({ firstName, lastName, email, token });
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

    const { firstName, lastName } = user;

    res.status(200).json({ firstName, lastName, email, token });
  } catch (error) {
    res.status(400).json({
      message: "login-error-response",
      error: error.message,
    });
  }
};

module.exports = { userCreateAcc, userLogin };
