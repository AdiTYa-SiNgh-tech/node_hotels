const mongoose = require('mongoose')
require('dotenv').config();

//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

//setup mongoDB connection 
// mongoose.connect(mongoURL , {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })
//something is added
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
ssl: true,
});


//Get the default connection
//Mongoose maintains a default connection object
const db = mongoose.connection ;

//Define event listeners for database connection
db.on('connected' , ()=> {
    console.log('Connected to mongoDB server ');
});

db.on('error' ,(err)=> {
    console.log('mongoDB connection error : ', err);
});

db.on('disconnected' ,()=> {
    console.log('mongoDB disconnected ');
});

module.exports = db;
