const mongoose = require ('mongoose');


const userSchema = mongoose.Schema({
    fullName:String,
    email:String,
    age:String,
    phone:String,
})
module.exports = mongoose.model('User',userSchema);