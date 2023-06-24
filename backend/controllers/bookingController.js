/**TAC SERVICE BOOKING APP BACKEND BOOKING CONTROLLER FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
This app is designed using the MVC (Model-View-Controller) pattern. This file contains all the controller functions needed to perform CRUD operations 
using Mongoose ODM. In simple these controller functions perform CRUD operations through the schema model to the database that are referenced in the "routes.js"
file.
*/

/* Importing the Database Schema Model into the controller file */
const Booking = require("../models/bookingModel");

/* Retrieving all service bookings from the database */
const getBookings = async (req, res) => {
  const bookingsList = await Booking.find({});

  try {
    res.json({
      message: "All service bookings from the bookingsDB Database",
      bookings: bookingsList,
    });
  } catch (error) {
    res.send(`Error message: ${error.message}`);
  }
};

/* Adding a new service booking document to the database */
const createBooking = async (req, res) => {
  const {
    customer,
    customerContactNumber,
    vehicleMake,
    vehicleModel,
    vehicleReg,
    bookingDate,
    service,
  } = req.body;

  const userId = req.user._id;

  const newBooking = await Booking.create({
    customer,
    customerContactNumber,
    vehicleMake,
    vehicleModel,
    vehicleReg,
    bookingDate,
    service,
    userId,
  });
  const bookingsList = await Booking.find({});

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
  const bookingID = req.params.id;
  const bookingUpdate = await Booking.findByIdAndUpdate(bookingID, req.body);
  const bookingsList = await Booking.find({});
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
  const bookingDelete = await Booking.findByIdAndDelete(bookingID);
  const bookingsList = await Booking.find({});
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

module.exports = { getBookings, createBooking, updateBooking, deleteBooking };

/**REFERENCES**/
/*
Mongoose ODM methods:
Utilized the Mongoose query methods to perform the crud operations in this project. Methods used: find(), create(), findByIdAndUpdate() and findByIdAndDelete().
Referenced the Mongoose Documentation website for this information.
https://mongoosejs.com/docs/queries.html

JavaScript try...catch block:
Utilized the JS try...catch to execute the CRUD operation controller functions in this project.
The try statement defines a code block to run (to try). The catch statement defines a code block to handle any error.
Referenced the w3schools website for this information.
https://www.w3schools.com/js/js_errors.asp
*/
