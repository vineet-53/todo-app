require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error connecting database");
});
db.once("open", () => {
  console.log("database connected ");
});
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 8000;
const router = require("./routes/app");

// middleware
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "layouts/layout");
app.use("/", router);
//
app.listen(process.env.PORT || PORT, err => {
  if (err) console.log("error connecting to server");
  console.log("server started");
});
