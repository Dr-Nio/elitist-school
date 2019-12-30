const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    password: String
}); 

module.exports = mongoose.model("Student", studentSchema);