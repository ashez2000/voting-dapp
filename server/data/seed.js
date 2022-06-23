const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../src/user-model");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const users = JSON.parse(fs.readFileSync(`data/users.json`, "utf-8"));

const importData = async () => {
  try {
    await User.create(users);
    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Destroyed");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
