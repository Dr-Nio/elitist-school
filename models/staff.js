const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
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
                .exec(function(err, staff){
                    if(err){
                        throw err;
                    }
                    else if(staff) {
                        if(self.id === staff.id) {  // if finding and saving then it's valid even for existing email
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
            //isAsync: true,
            validator: async function(value, isValid) {
                const self = this;
                return self.constructor.findOne({ email: valuec })
                .await(function(err, staff){
                    if(err){
                        throw err;
                    }
                    else if(staff) {
                        if(self.id === stadd.id) {  // if finding and saving then it's valid even for existing email
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

module.exports = mongoose.model("Staff", staffSchema);