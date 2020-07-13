const router = require("express").Router()
const db = require("../models")
// to run locally uncomment line below, to deploy comment it out again
// require("dotenv").config()
var passport = require("passport")

var petfinder = require("@petfinder/petfinder-js");

var client = new petfinder.Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET
});

console.log(client);

router.post("/api/petfinder", function (req, res) {
  client.animal
    .search({
      type: req.body.type,
      location: req.body.location,
      breeds: {
        primary: req.body.breed
      }
    })
    .then((response) => {
      res.json(response.data);
      // let featuredAnimal = response.data.animals[0];
      // let featuredImage = "";

      // const animalsWithImages = response.data.animals.filter(
      //   (animal) =>
      //     animal.primary_photo_cropped && animal.primary_photo_cropped.medium
      // );

      // if (animalsWithImages.length > 0) {
      //   featuredAnimal = animalsWithImages[0];
      //   featuredImage = featuredAnimal.primary_photo_cropped.medium;
      // }

      // console.log(response.data.animals[0]);
      // this.setState({
      //   //   results: response.data.animals,
      //   featuredPhoto: featuredImage,
      //   featuredName: featuredAnimal.name,
      //   featuredSpecies: featuredAnimal.species,
      //   featuredBreed: featuredAnimal.breeds.primary,
      //   featuredGender: featuredAnimal.gender,
      //   featuredStatus: featuredAnimal.status
      // });
      // console.log(this.state.results);
      // Do something with `response.data.animals`
    })
    .catch(function (error) {
      console.log(error);
    });
});

// Register User
router.post("/register", function (req, res) {
  console.log("new Users", req.body);
  var newUser = new db.User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  db.User.createUser(newUser, function (err, user) {
    if (err) throw err;
    res.send(user).end();
  });
});

// Endpoint to login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});

// Endpoint to get current user
router.get("/user", function (req, res) {
  res.send(req.user);
});

// Endpoint to logout
router.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

module.exports = router;
