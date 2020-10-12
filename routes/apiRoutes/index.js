

const { db } = require("../../db/db.json");
const router = require("express").Router();
const fs = require("fs");
const store = require("../../db/store.js");
const { getNotes } = require("../../db/store.js");
const uuidv1 = require("uuidv1"); 


//setting variable to read old notes from db
const savedNotes = fs.readFileSync("./db/db.json", "UTF-8");
// if we have notes in the db set them to a variable 
if (savedNotes) {
  var dbNotes = JSON.parse(savedNotes);
  notes = dbNotes;
} else {
  notes = [];
}


//display notes on page
router.get("/notes", (req, res) => {
  return res.json(notes);
});

//collect client input data, store it and write it to the page
router.post("/notes", function (req, res) {
 
  //assign a random ID
  let noteId = uuidv1();
  //structure the note object
   let newNote = {
    id: noteId,
    title: req.body.title,
    text: req.body.text,
  };
  
  notes.push(newNote);

  res.json(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function (
    err
  ) {
    if (err) throw err;
  });
});


module.exports = router;


 