const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    password: String,
    email: String,
    roll:{
        type: String,
        default: "consumer",

    }, 
    active: {
        type: Boolean,
        default:true
    }
})

var User = mongoose.model('User',UserSchema)
module.exports = User

