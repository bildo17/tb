const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2");
const keys = require("./config/keys.js");

const app = express();

//app.get('/', (req, res) => {
//res.send({issa successfull deploy})
//});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callBackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
// clientID 47054565510-0iul64ng2le7nvjd0obqhgfv9svhbqhp.apps.googleusercontent.com
//clientSecret gYm4S5PaNNzSk1IzpKdfvY_P
const PORT = process.env.PORT || 5000;
app.listen(PORT);
