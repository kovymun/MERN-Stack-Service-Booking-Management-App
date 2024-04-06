/** TAC SERVICE BOOKING APP EXPRESSJS BACKEND BOOKING ROUTES FILE **/
/*
 * This file contains the Express.js backend routes for the TAC Service Booking App.
 * These routes handle all CRUD operation requests to corresponding controller functions defined in "bookingController.js".
 */

/*Importing the necessary modules and controller functions to the backend routes file.*/
const router = require("express").Router();
const {
  getBookings,
  getSingleBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const requireAuth = require("../middleware/requireAuth");

/* Require authorization for all booking routes */
router.use(requireAuth);

/* GET request for all service bookings */
router.get("/", getBookings);

/* GET request for a service booking based on ID */
router.get("/:id", getSingleBooking);

/* POST request to add/schedule a new service booking */
router.post("/schedule-booking", createBooking);

/* PUT request to update an existing service booking */
router.patch("/update-booking/:id", updateBooking);

/* DELETE request to remove a service booking */
router.delete("/remove-booking/:id", deleteBooking);

module.exports = router;
