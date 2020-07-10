const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const session = require("express-session")
const apiRoutes = require("./routes/apiRoutes")
const users = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session
app.use(session({

  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

app.use(apiRoutes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
