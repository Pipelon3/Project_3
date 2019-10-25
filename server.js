const express = require("express");
// Handles environment variables
require("dotenv").config();
console.log(process.env.REACT_APP_AirPnP_API_KEY);

// var mongojs = require("mongojs");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Locations",
  { useNewUrlParser: true }
);

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// var databaseUrl = "locations";
// var collections = ["locations"];

// var db = mongojs(databaseUrl, collections);
// console.log(db, "==================================================================")
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// app.get("/all", function(req, res) {
//   db.locations.find({}, function(error, found) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       res.json(found);
//     }
//   });
// });

// app.get("/location", function(req, res) {
//   db.locations.find().sort({ location: 1 }, function(error, found) {
//     if (error) {
//       console.log(error);
//     }
//     else {
//       res.json(found);
//     }
//   });
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
