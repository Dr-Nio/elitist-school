const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fname: String,
    lname: String,
    phone: {
        type: String,
        lowercase: true,
        required: true,
        validate: {
            //isAsync: true,
            validator: async function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ phone: value })
                .exec(function(err, student){
                    if(err){
                        throw err;
                    }
                    else if(student) {
                        if(self.id === student.id) {  // if finding and saving then it's valid even for existing email
                            return isValid(true);
                        }
                        return isValid(false);  
                    }
                    else{
                        return isValid(true);
                    }

                })
            },
            message:  'The phone number is already taken!'
        },
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        validate: {
            async: true,
            validator: async function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: value })
                .await(function(err, student){
                    if(err){
                        throw err;
                    }
                    else if(student) {
                        if(self.id === student.id) {  // if finding and saving then it's valid even for existing email
                            return isValid(true);
                        }
                        return isValid(false);  
                    }
                    else{
                        return isValid(true);
                    }

                })
            },
            message:  'The email address is already taken!'
        },
    },
    password: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
}); 

module.exports = mongoose.model("Student", studentSchema);