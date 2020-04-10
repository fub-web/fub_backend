module.exports = {
  url:
    "mongodb+srv://aman15aditya:<password>@fub-iujwy.mongodb.net/test?retryWrites=true&w=majority",
  secret: "yoursecret"
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://aman15aditya:<password>@fub-iujwy.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
