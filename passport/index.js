const passport = require('passport');

//Import Strategies
// const GoogleStrategy = require('./GoogleStrategy');
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');
// const localStrategy = require('./localStrategy');
// const TwitterStrategy = require('./TwitterStrategy');
// const GithubStrategy = require('./GithubStrategy');
// const FacebookStrategy = require('./FacebookStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);


module.exports = passport;