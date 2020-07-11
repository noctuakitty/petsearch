const express = require('express');
const path = require("path");
const router = express.Router();
const passport = require('../passport');

router.post("/signup", (req, res, next) => {
    console.log(req.body);

    let options = function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    };

    let callback = function(req,res,result) {
        console.log(req);
    }

    passport.authenticate("local", options, callback)(req, res, next);
});

module.exports = router; 