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

if (process.env.NODE_ENV === "production") {
  //express will serve up js production assets from /client/build
  app.use(express.static("/client/build"));
  //express will serve up assets from index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
mongoose.connect(keys.databaseID);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
