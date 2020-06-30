if(process.env.NODE_ENV!== "production") {
  require("dotenv").config()
}
const methodOverride = require("method-override")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const bcrypt = require("bcrypt")
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session")

const initializePassport = require("./passport-config");
const { Router } = require("express");
initializePassport(
passport,
  email=>users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users= []

app.set("view-engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"))

checkAuthenticated = (req,res,next) =>{
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect("/login")
}

checkNotAuthenticated = (req, res, next) => {
  if(req.isAuthenticated()){
  return res.redirect("/")
  }
  next()
}

app.post ("/login", checkNotAuthenticated, passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}))

//Post Routes
app.post ("/register", async(req,res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect("/login")
  }catch{
    res.redirect("/register")
  }
console.log(users)
})

//Get Routes
app.get("/", checkAuthenticated, (req,res)  =>{
  res.render("index.ejs",{ name: req.user.name})
})

app.get ("/login", checkNotAuthenticated,(req,res) => {
  res.render("login.ejs")
})

app.get ("/register", checkNotAuthenticated, (req,res) => {
  res.render("register.ejs")
})

app.delete("/logout", (req, res)=> {
  req.logOut()
  res.redirect("/login")
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/users");
mongoose.connection.once("open", function(){
  console.log("Connection has been made!")
}).on("error", function(){
  console.log("Connection Error:", error)
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
