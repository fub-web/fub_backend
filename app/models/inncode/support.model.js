var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SupportSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  message: String,
  created_at: String,
  updated_at: String,
});

module.exports = mongoose.model("Support", SupportSchema);
