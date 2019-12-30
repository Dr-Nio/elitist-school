const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    password: String,
    now: String
}); 

module.exports = mongoose.model("Staff", staffSchema);