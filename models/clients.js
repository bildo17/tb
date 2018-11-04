const mongoose = require("mongoose");
const { Schema } = mongoose;
//this is a shortcut to pull schema property from mongoose.
//it has been destructured from const Schema = mongoose.schema;

const clientSchema = new Schema({
  //schema is meant to identify which properties will be included in a database's record
  googleID: String
});

mongoose.model("clients", clientSchema);
//this function is meant to create the model class
//the first input is teh name you want to give the collection.
