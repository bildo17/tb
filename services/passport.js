const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const keys = require("../config/dev.js");
const mongoose = require("mongoose");
const User = mongoose.model("Clients");
//to get access to the client model class
//one argument inside the bracket means that i am trying to fetch something out of mongoose
//two arguments as is the case when creating a model class collection is when one wants to load something into mongoose.
//the newly created object User is now our model class

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new OAuth2Strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // } else {
      const user = await new User({ googleID: profile.id }).save();
      return done(null, user);
    }
  )
);
