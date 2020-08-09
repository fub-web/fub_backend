const mongoose = require("mongoose");

const URI =
  // "mongodb+srv://aman15aditya:Aman@156@fub-iujwy.mongodb.net/test?retryWrites=true";
  "mongodb+srv://verma:vermatest@cluster0.ivsju.mongodb.net/<dbname>?retryWrites=true&w=majority"

const connectdb = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });
  console.log("db connected..!!!");
};

module.exports = connectdb;
