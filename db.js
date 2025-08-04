const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/hotels' //replace hotels with your database name 

//setup mongoDB connection 
mongoose.connect(mongoURL , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

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
