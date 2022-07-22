const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name: String,
email:String,
phone: String,
},{
    timestaps:true,
});
const User = mongoose.model('User', userSchema);

modulel.exports = User;