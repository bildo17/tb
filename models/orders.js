const mongoose = require("mongoose");
const { Schema } = "mongoose";

const ordersSchema = new Schema({
  //schema is meant to identify which properties will be included in a database's record
  productName: String,
  quantity: String
});

mongoose.model("Orders", ordersSchema);
