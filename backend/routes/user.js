/**TAC SERVICE BOOKING APP EXPRESSJS BACKEND TASK USER ROUTES FILE**/

/* The routes in this file reference the controller functions in the "userController.js" file to handle user sign-up and login requests. */

const router = require("express").Router();

//Importing the user controller functions into the user routes file
const { userLogin, userSignUp } = require("../controllers/userController");

//POST request sign-up route to handle a user sign-up request
router.post("/sign-up", userSignUp);

//POST request login route to handle a user login request
router.post("/login", userLogin);

module.exports = router;
