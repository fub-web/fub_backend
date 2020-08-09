const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const connectdb = require("./config/db.connection");
const cors = require("cors");
// create express app
const app = express();
app.use(cors());
connectdb();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database

app.use(passport.initialize());
app.use(passport.session());
// define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Hi, ready to rolls" });
});


require("./app/routes/inncode/support.routes.js")(app);
require("./app/routes/inncode/projectDiscussion.routes.js")(app);

// listen for requests
//  require('./app/routes/note.routes.js')(app);
//  require('./app/routes/contactus.routes.js')(app);
require("./app/routes/iot.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/inncode/userPurchase.routes")(app);
require("./app/routes/inncode/purchaseManage.routes")(app);
require("./app/routes/inncode/purchaseAssigned.routes")(app);
//  require('./app/routes/category.routes.js')(app);
//  require('./app/routes/product.routes.js')(app);
//app.use('/create', require('./app/routes/user.routes.js'));

app.listen(process.env.PORT || 3300, () => {
  console.log("Server is listening on port 3300");
});
