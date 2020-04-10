const mongoose = require("mongoose");

const URI =
  "mongodb+srv://aman15aditya:Aman@156@fub-iujwy.mongodb.net/test?retryWrites=true";

const connectdb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("db connected..!!!");
};

module.exports = connectdb;
