/** TAC SERVICE BOOKING APP EXPRESSJS BACKEND TASK USER ROUTES FILE **/
/*
 * This file contains the Express.js backend routes for user login related tasks in the TAC Service Booking App.
 * These routes handle all operations corresponding to controller functions defined in "userController.js", to manage user account creation and login requests.
 */

const router = require("express").Router();

/* Importing the user controller functions into the user routes file */
const { userLogin, userCreateAcc } = require("../controllers/userController");

/* POST request sign-up route to handle a user account creation request */
router.post("/create-acc", userCreateAcc);

/* POST request login route to handle a user login request */
router.post("/login", userLogin);

module.exports = router;
