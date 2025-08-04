// function add(a,b){
//     return a+b;
// }

// var add = function(a,b){
//     return a+b;
// }
// var add = (a,b) =>{return a+b}

// var add = (a,b) => a+b;
// var result = add(4,5);
// console.log(result);

// (function(){
//     console.log("automatically running ")
// })();

// function callback(){
//     console.log("adding is successfuly completed");
// }
// const add = function(a, b , aditya){
//     var result = a+b; // main function work complete
//     console.log("result : " , result);
//     aditya();
// }
// add(12,4,function(){
//     console.log("adding is successfully completed");
// });

// add(4,6 , ()=>console.log("second callback function is running"));

// var fs = require('fs');
// var os = require('os');

// var about = os.userInfo();
// console.log(about);
// fs.appendFile('greeting.txt',"hello from aditya "+'!\n',()=>console.log("greeting sended"));

// const notes = require('./notes.js')
// console.log("server file is available ")
// var age = notes.age;
// console.log(age);

// var _ = require('lodash');
// var arr = ["aditya" , "lucky" ,"singh", "lucky ","singh", 1 , 2 ,3,4,5,1,4,5];
// var unique = _.uniq(arr);
// console.log(unique);
// console.log(_.isString("aditya"));
// console.log(_.isString(23));

// const json = '{"name" : "aditya" , "age" : 23 , "city" : "delhi"}';
// const obj = JSON.parse(json);
// console.log(obj);

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes);


// const bodyParser = require('body-parser');
// app.use(bodyParser.json()); //req.body

const Person = require('./models/Person');
const menuItem = require('./models/menuItem');

// Define a route
app.get('/',function (req, res){
  res.send('Welccome to the restaurant ');
});

//post route to add a person

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log("listening to port 3000")
});

