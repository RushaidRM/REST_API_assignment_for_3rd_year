const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
 
//Load booking model
const Creditcard = require('../../models/Creditcard');



// @route   POST api/creditcard/add
// @desc    adding a credit card details
// @access  Private
router.post("/add" , (req,res) => {
    let newCreditcard  = new Creditcard(req.body);
  
    newCreditcard.save().then( creditcard => {
         res.status(200).json({ "creditcard" :"Credit card is added successfully" })
     }).catch(err =>{
         res.status(400).send("Credit card addition failed")
     })
 })

 module.exports = router;