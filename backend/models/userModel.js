/**TAC SERVICE BOOKING APP - MONGOOSE USER SCHEMA MODEL FILE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: String,
});

/* STATIC SIGN-UP METHOD */
userSchema.statics.signup = async function (email, password, role) {
  // validation
  if (!email || !password || !role) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password Not Strong Enough");
  }

  //checking whether the user email address already exists in the database
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email Address Already In Use");
  }

  /*
  bcrypt package allows us to use something called ""salt" when we are hashing the passwords. salt is a
  random string of characters that gets added to the users password before it gets hashed - it adds an
  extra layer of security to it.
  */
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, role });

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
    throw Error("Invalid User Name");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);

/**REFERENCES**/
/*
bcrypt package:
bcrypt is a hashing function that allows us to hash passwords. Hashing turns your password into a short string of letters and/or numbers using an encryption
algorithm, adding extra security to your password.
Referenced the NPM package manager website for the installation and usage information.
https://www.npmjs.com/package/bcrypt

Referenced a YouTube video for more information on how to apply Authentication with JWT to this MERN stack application.
"MERN Authentication Tutorial." YouTube uploaded by The Net Ninja, 19 July 2022, <https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT>
*/
