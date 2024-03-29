const Strategy = require('passport-local').Strategy;
const User = require('../models/Users');

const SignupStrategy = new Strategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
    });
}
);

module.exports = SignupStrategy;
