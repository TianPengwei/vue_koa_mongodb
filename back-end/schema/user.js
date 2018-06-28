const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const userSchema = new Schema({
    userName : String,
    password : String,
    registerDate : {
        type : Date,
        default : Date.now
    }
});

//生成model
module.exports = Mongoose.model('User',userSchema);