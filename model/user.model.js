const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
      },
    email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
    type: String,
    required: true
    },
    phone: {
        type: Number,
        required: true
        },
    status :{
    type : Boolean,
    required : true
    },
    vote :{
        type : String,
        // required : true
        },
});
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;