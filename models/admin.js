'use strict';

const mongoose = require("mongoose");

//const validator = require("mongoose-validate");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    fname: String,
    lname: String,
    phone: {
        type: String,
        lowercase: true,
        required: true,
        validate: {
            isAsync: true,
            validator: function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: value })
                .exec(function(err, admin){
                    if(err){
                        throw err;
                    }
                    else if(admin) {
                        if(self.id === admin.id) {  // if finding and saving then it's valid even for existing email
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
            isAsync: true,
            validator: function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: value })
                .exec(function(err, admin){
                    if(err){
                        throw err;
                    }
                    else if(admin) {
                        if(self.id === admin.id) {  // if finding and saving then it's valid even for existing email
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

//companySchema.index({industry: 1, employee.staff_id: 1}, {unique: true, sparse: true});

module.exports = mongoose.model("Admin", adminSchema);