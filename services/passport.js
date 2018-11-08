const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const keys = require("../config/dev.js");
const mongoose = require("mongoose");
const User = mongoose.model("Clients");
//to get access to the client model class
//one argument inside the bracket means that i am trying to fetch something out of the mongoose
//two arguments as is the case when creating a model class collection is when one wants to load something into mongoose.
//the newly created object User is now our model class

passport.serializeUser((User, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findByID(id).then(User => {
    done(null, user);
  });
});
passport.use(
  new OAuth2Strategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: keys.googleCallBackUrl,
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //creating a new model instance of a User
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      // new User({ googleId: profile.id }).save();
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new user({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
