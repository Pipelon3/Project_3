const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    locationID: { type: String },
    location: { type: String },
    numberOfBathrooms: { type: Number },
})

const Locations = mongoose.model("Locations", locationSchema);

module.exports = Locations;