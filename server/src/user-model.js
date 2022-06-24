const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Please provide your username",
    unique: true,
  },
  ethAccount: {
    type: String,
    required: "Please provide your ethAccount ID",
    unique: true,
  },
  email: {
    type: String,
    required: "Please provide your email",
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  dob: {
    type: String,
    required: "Please provide your Date of birth",
    match: [
      /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
      "Provide Date of birth in YYYY-MM-DD",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
