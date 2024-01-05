const UserModel = require('../model/user.model.js');
let getUserDetails = (req,res)=>{
    UserModel.find({},(err, result) => {
        if (err) {
        res.send(err);
        }
        res.json(result);
        });
}

let storeUserDetails = (req,res)=>{
    let userdetail = new UserModel({
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        status : false,
        vote : ""
    })
    userdetail.save((err,result)=>{
        if(err){
        res.send(err);
        }
        else{
        res.json(result);
        }
    })
}
//get user by user name
let getUserByUsername = (req,res)=>{
    let username = req.params.username;
    let password = req.params.password;
    console.log("username-->",'"' + username + '"' );
    console.log("password-->",'"' + password + '"' );
    UserModel.find({username:username,password:password}, (err , result)=>{
        if(err){
            res.send(err);
        }
            else{
            res.send(result);
        }
    })
}
// delete user 

let deleteUser = (req,res)=>{
    let username = req.params.username;
    console.log(username)
    UserModel.deleteOne({username : username}, (err , result)=>{
        if(err){
            res.send(err);
        }
            else{
            res.send(result);
        }
    })
}

// delete user 

let updateUser = (req,res)=>{
    let username = req.body.username;
    let status = req.body.status;
    let vote = req.body.vote;
    console.log(username,status,vote);
    UserModel.findOneAndUpdate({ username: username }, { status: status , vote : vote }, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
      });
}
module.exports = {getUserDetails,storeUserDetails,getUserByUsername,deleteUser,updateUser};