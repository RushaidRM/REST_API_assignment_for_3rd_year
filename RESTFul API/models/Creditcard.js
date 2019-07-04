const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const  Creditcardschema = new Schema({ 
   nameOnCard : {
       type:String
   },
   cardNumber : {
     type: Number,
     unique: true,
     maxlength:10
    },
    Amount : {
      type: Number,
      maxlength:10
    },
    cvcNumber : {
         type:String,
         maxlength:3       
    }
})

module.exports = Creditcard =  mongoose.model("creditcard",Creditcardschema);