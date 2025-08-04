const mongoose = require('mongoose')

const menuItemSchemna = new mongoose.Schema({
    name:{
        type : String ,
        required : true
    },
    price : {
        type: Number,
        required : true,

    },
    taste :{
        type : String ,
        enum : ['sweet','spicy','sour']
    },
    is_drink :{
        type : Boolean,
        default : false
    },
    ingredients :{
        type : [String],
        default : []
    },
    num_sales : {
        type : Number ,
        default : 0
    }

})

const menu = mongoose.model('menuItem', menuItemSchemna);
module.exports  = menu; 