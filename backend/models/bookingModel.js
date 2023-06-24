/**TAC SERVICE BOOKING APP - MONGOOSE BOOKING SCHEMA MODEL FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/
/*
* This file holds the "Mongoose schema model" for all MongoDB booking documents for this app.
* A schema defines the structure of the document data within a particular database collection. This should structure the fields within the document & the data-type. 
  We lay the structure of how we want our data to look like.
* Mongoose is an ODM (Object-Document-Mapper) allowing a node.js/express.js app(which speaks in the language of Javascript Objects) to communicate with a 
  MongoDB database (which speaks in a language of collections and documents).
*/
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    customerContactNumber: {
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
    service: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/*
 * We then use the Schema to create a Mongoose Model.
 * In this example, 'Bookings' represents the NAME OF THE COLLECTION IN OUR DATABASE.
 * We going to change it to "Booking" --> Mongoose will very cleverly convert this string into a pluralize form to create the collection ("bookings").
 */

module.exports = mongoose.model("Booking", bookingSchema);
