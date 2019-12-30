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

const uniqueIndex = (collection, callback) => {
    collection.createIndex({email:1}, {unique:true}, (err, result) => {
        if(err) {console.error(`Failed to create index ${err}`); process.exit(1);}
        console.log(`Unique Index created successfully: ${result}`)
        callback(result)
    })
}

module.exports = mongoose.model("Staff", staffSchema);