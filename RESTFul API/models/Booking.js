const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const  BookingSchema = new Schema({ 
    from: {
       type:String
    },
    to: {
     type: String
    },
    date : {
        type: Date,      
        min: '2019-01-01',
        max: '2019-12-12'
    },
    quantity : {
        type: Number,
        maxlength:5
      },
})


module.exports = Booking = mongoose.model("booking",BookingSchema);