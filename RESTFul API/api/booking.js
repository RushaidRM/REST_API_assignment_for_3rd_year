const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load booking model
const Booking = require('../../models/Booking');

// @route   POST api/booking
// @desc    booking a train
// @access  Private
router.post("/" , passport.authenticate('jwt', { session: false }),
    (req, res) => {

    Booking.save().then( card => {
         res.status(200).json( " Booked Successfully" )
     }).catch(err =>{
         res.status(400).send("  Booking failed")
     })
 })

 module.exports = router;