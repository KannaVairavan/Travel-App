const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  location:{ type: String, required: true },
  
  date: { type: Date, default: Date.now }
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
