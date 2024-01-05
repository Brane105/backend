const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
const url = 'mongodb://127.0.0.1:27017/voting';
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended:true}));//enables body part data
app.use(bodyParser.json());//json data
app.use(cors());//use model from line 3 

//database connection without warning
const mongooseDbOption = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds 
};

mongoose.connect(url,mongooseDbOption)
.then(()=>{
    console.log("Mongodb connected")
})
.catch(err =>{
    console.log(err)
});
// mongoose.connection

//link to the routers module like a import concept 
const adminRouter = require('./router/admin.router.js');
app.use('/', adminRouter);

//user routers 
const userRouter = require('./router/user.router.js');
app.use('/', userRouter);

//votes routers
const voteRouter = require('./router/vote.router.js');
app.use('/polls', voteRouter);
//listen port 
app.listen(port,()=> console.log('Listing on port 8080'));