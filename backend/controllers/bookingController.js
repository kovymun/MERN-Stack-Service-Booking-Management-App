/** TAC SERVICE BOOKING APP BACKEND BOOKING CONTROLLER FILE **/
/*
This app is designed using the MVC (Model-View-Controller) pattern. This file contains all the controller functions responsible for executing CRUD operations 
using Mongoose ODM. In essence, these controller functions perform CRUD operations through the schema model to the database that are referenced in the "routes.js"
file.
*/

/* Importing the Database Schema Model into the controller file */
const Booking = require("../models/bookingModel");

/* Retrieving all service bookings from the database */
const getBookings = async (req, res) => {
  const userId = req.user._id;
  const bookingsList = await Booking.find({ userId });

  try {
    res.json({
      message: "All service bookings from the bookingsDB Database",
      bookings: bookingsList,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

/* Get a single service booking matching a certain ID */
const getSingleBooking = async (req, res) => {
  const bookingID = req.params.id;
  const userId = req.user._id;
  const singleBooking = await Booking.findOne({
    _id: bookingID,
    userId: userId,
  });

  try {
    if (!singleBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    singleBooking;
    res.json({
      message: "Service Booking Found.",
      booking: singleBooking,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

/* Adding a new service booking document to the database */
const createBooking = async (req, res) => {
  if (req.body.addInfo === "") {
    req.body.addInfo = "None"; // Set "addInfo" to a string value of "None" if no additional booking information is provided.
  }

  const userId = req.user._id;
  const newBooking = await Booking.create({ ...req.body, userId });
  const bookingsList = await Booking.find({ userId });

  try {
    newBooking;
    res.json({
      message: "New Service Booking Add",
      bookings: bookingsList,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

/* Updating an existing service booking document in the database */
const updateBooking = async (req, res) => {
  if (req.body.addInfo === "") {
    req.body.addInfo = "None"; // Set "addInfo" to a string value of "None" if no additional booking information is provided.
  }

  const bookingID = req.params.id;
  const userId = req.user._id;
  const bookingUpdate = await Booking.findByIdAndUpdate(bookingID, req.body);
  const bookingsList = await Booking.find({ userId });
  try {
    bookingUpdate;
    res.json({
      message: "Service Booking Updated",
      bookings: bookingsList,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

/* Deleting a service booking document from the database */
const deleteBooking = async (req, res) => {
  const bookingID = req.params.id;
  const userId = req.user._id;
  const bookingDelete = await Booking.findByIdAndDelete(bookingID);
  const bookingsList = await Booking.find({ userId });
  try {
    bookingDelete;
    res.json({
      message: `Service Booking with id:${bookingID} has been removed from the database.`,
      bookings: bookingsList,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

module.exports = {
  getBookings,
  getSingleBooking,
  createBooking,
  updateBooking,
  deleteBooking,
};
