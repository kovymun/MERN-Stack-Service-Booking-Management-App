/** TAC SERVICE BOOKING APP - MONGOOSE BOOKING SCHEMA MODEL FILE **/
/*
* This file defines the "Mongoose schema model" for managing all MongoDB booking documents in this application.
* A schema defines the structure of the document data within a database collection. It dictates the fields within the document and their data types - essentially laying the structure of
  how we want the data to look like.
* Mongoose is an ODM (Object-Document-Mapper) enabling communication between a node.js/express.js application and a MongoDB database.
*/
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerFirstName: {
      type: String,
      required: true,
    },
    customerLastName: {
      type: String,
      required: true,
    },
    customerContactNumber: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    vehicleMake: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    vehicleReg: {
      type: String,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    serviceOption: {
      type: String,
      required: true,
    },
    addInfo: {
      type: String,
    },
    status: {
      type: String,
      default: "SCHEDULED",
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/*
 * The Schema is then used to create a Mongoose Model.
 * In this example, "Bookings" represents the COLLECTION NAME IN THE DATABASE.
 * We going to change it to "Booking" --> Mongoose automatically converts this string into a pluralize form to create the "bookings" collection in the database.
 */
module.exports = mongoose.model("Booking", bookingSchema);
