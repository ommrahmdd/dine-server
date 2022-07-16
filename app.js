const dineRouter = require("./routers/dineRouter");
let dotenv = require("dotenv");
let morgan = require("morgan");
let cors = require("cors");
dotenv.config({ path: "./config.env" });
const express = require("express");
let app = express();
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/dine", dineRouter);

module.exports = app;
