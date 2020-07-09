 
const router = require("express").Router()
const db = require("../models")

var passport = require("passport")

// Register User
router.post('/register', function(req, res){
  console.log("new Users", req.body)
      var newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      db.User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
      });
     
  });

// Endpoint to login
router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
router.get('/user', function(req, res){
  res.send(req.user);
})


// Endpoint to logout
router.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

module.exports = router