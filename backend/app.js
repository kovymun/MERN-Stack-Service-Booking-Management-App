/** TAC SERVICE BOOKING APP - BACKEND SERVER FILE **/

/* Require necessary files and modules into the server file. */
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bp = require("body-parser");
const routes = require("./routes/routes");
const userLoginRoutes = require("./routes/user");

/* Setting up the App middleware. Note: helmet framework used to secure this expressJS back-end application. */
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use("/api/bookings", routes);
app.use("/api", userLoginRoutes);

/* dotenv package used to load environment variables from a .env file. */
const dotenv = require("dotenv").config();

/* connecting to the MongoDB bookingsDB */
const connectDB = require("../backend/dbs/db");
connectDB();

/* Staring the server - App server listening/running on port 8080. */
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
