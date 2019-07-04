const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load booking model
const Search = require('../../models/Search');



// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post("/search/train" , (req,res) => {
    let newSearch  = new Search(req.body);
  
    newSearch.save().then( search => {
         res.status(200).json( "Search success")
     }).catch(err =>{
         res.status(400).send("Search failed")
     })
 })
 module.exports = router;
