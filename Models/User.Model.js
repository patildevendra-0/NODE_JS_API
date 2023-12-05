
const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    date:{
        type : Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('User',user_schema);    