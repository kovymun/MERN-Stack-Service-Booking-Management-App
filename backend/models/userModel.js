/** TAC SERVICE BOOKING APP - MONGOOSE USER SCHEMA MODEL FILE **/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/* STATIC ACCOUNT CREATION METHOD */
userSchema.statics.createAcc = async function (
  firstName,
  lastName,
  email,
  password
) {
  // validation
  if (!firstName || !lastName || !email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password Not Strong Enough");
  }

  // checking whether the user email address already exists in the database
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email Address Already In Use");
  }

  /*
  * bcrypt package allows us to use "salt" during password hashing. "salt" is a random string of characters that gets added to the users password prior to hashing, 
    thereby adding an extra layer of security.
  */
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
  });

  return user;
};

/* STATIC LOGIN METHOD */
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid email address and/or password");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid email address and/or password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
