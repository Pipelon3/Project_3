const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const keys = require('./keys');

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

passport.use(
  new GoogleStrategy({
    callbackURL: 'auth/google/redirect',
    consumerKey: keys.google.consumerKey,
    consumerSecret: keys.google.clientSecret
   
  }, ()=>{}))
//   function(token, tokenSecret, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
// }
// ));


