require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./models/User");
const Job = require("./models/Job");

const connectDB = require("./db/connect");

connectDB();

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
