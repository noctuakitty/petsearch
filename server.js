if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 3001;
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passportnpm = require("passport");
const passport = require("./passport");
const flash = require("express-flash");
const session = require("express-session")
const initializePassport = require("./passport-config");
const { Router } = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/users",
{useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .once("open", function () {
    console.log("Connection has been made!");
  })
  .on("error", function () {
    console.log("Connection Error:", error);
  });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
