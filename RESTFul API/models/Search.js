const mongoose = require("mongoose")
const Schema = mongoose.Schema;

//create schema
const  SearchSchema = new Schema({ 
    from   : {
       type:String
    },
    to : {
       type: String
    },
    quantity : {
      type: Number,
      maxlength:5
    },
})

module.exports = Search  =  mongoose.model("search",SearchSchema);