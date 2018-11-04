const express = require("express");
const mongoose = require("mongoose");
require("./services/passport.js");
const keys = require("./config/keys.js");
const app = express();

require("./routes/authRoutes.js")(app);

mongoose.connect(keys.databaseID);
//app.get('/', (req, res) => {
//res.send({issa successfull deploy})
//});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
