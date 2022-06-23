const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const errorHandler = require("./middlewares/error");
const auth = require("./auth-routes");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => console.log(`db:${conn.connection.host}`));

app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.all("*", (req, res) => {
  res
    .status(404)
    .json({ status: "fail", message: `${req.originalUrl} NOT FOUND` });
});

app.use(errorHandler);

app.listen("5000", console.log("Voting API port:5000"));
