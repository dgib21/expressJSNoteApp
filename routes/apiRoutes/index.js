
// requires the DB file 
const { db } = require("../../db/db.json");
const { get } = require("../html");

//initializing router with express
const router = require("express").Router();


 const store = require("../../db/store.js");
 // const { getNotes } = require("../../db/store.js");



router.get('/notes', (req, res) => {
    
  const allNotes = store.getNotes(); 
  console.log(allNotes); 
  res.send("all notes");  
});

// /notes/{id}



module.exports = router;

// display notes on page 

//add note route 

// delete note route 

//get notes route 
 