/**TAC SERVICE BOOKING APP EXPRESSJS BACKEND BOOKING ROUTES FILE**/

/* The routes in this file reference the controller functions in the "bookingController.js" file to handle all the CRUD operation requests. */

/*Importing the necessary modules and controller functions to the backend routes file.*/
const router = require("express").Router();
const {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const requireAuth = require("../middleware/requireAuth");

// Require authorization for all booking routes
router.use(requireAuth);

//GET request for all service bookings
router.get("/", getBookings);

//POST request to add/schedule a new service booking
router.post("/schedule-booking", createBooking);

//PUT request to update an existing service booking
router.put("/update-booking/:id", updateBooking);

//DELETE request to remove a service booking
router.delete("/remove-booking/:id", deleteBooking);

module.exports = router;
