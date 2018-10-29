const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const app = express();

app.get('/', (req, res) => {
  res.send({#issa successfull deploy})
});

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
