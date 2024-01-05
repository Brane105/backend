const mongoose = require('mongoose');
const voteSchema = new mongoose.Schema({
 candidate : {
   type : String,
    required : true
 },
 symbol : {
   type : String,
    required : true,
    unique: true
 },
 party:{
  type : String,
  required : true,
  unique: true
 },
 count : {
   type : Number
 }
});
const VoteModel = mongoose.model('Vote', voteSchema);
module.exports = VoteModel;
