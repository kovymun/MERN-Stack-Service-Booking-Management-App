/**TAC SERVICE BOOKING APP - BACKEND DATABASE CONNECTION FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/
/*
* This file holds the configuration code for the MongoDB Database connection.
* The MongoDB connection string to the "bookingsDB" is saved in the .env config file. 
* The .env file is a convenient way to store environment-specific variables, such as API keys and database connections/passwords, in a simple text file. 
  This enables you to manage sensitive information consistently while maintaining its security.
* dotenv package used in this connection configuration. dotenv is used to load environment variables from a .env file.
*/

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const dBConn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Database");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

/**REFERENCES**/
/*
Referenced the Section.io website for information on how to Connect MongoDB to Node.js Using Mongoose.
https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
*/
