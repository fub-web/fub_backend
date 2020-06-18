var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectDescription = new Schema({
  name: String,
  email: String,
  subject: String,
  project_description: String,
  created_at: String,
  updated_at: String,
});

module.exports = mongoose.model("ProjectDescription", ProjectDescription);