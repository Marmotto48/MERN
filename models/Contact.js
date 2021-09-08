const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema ({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true,
        //unique : true //or if the email exists written in the controller
    },
    phone : String
});
module.exports = contact = mongoose.model("contact", contactSchema)