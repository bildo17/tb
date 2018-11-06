const express = require("express");
const keys = require("./config/dev");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
require("./models/clients");
require("./services/passport");

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
//this function tells express to make use of cookies

app.use(passport.initialize());
app.use(passport.session());
//connecting cookies to passport

require("./routes/authRoutes.js")(app);
mongoose.connect(keys.databaseID);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
