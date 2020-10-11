//   //displays our home page(index.html)
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/assets/index.html'));
//   });
// //displays the animals page 
//   app.get('/animals', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/assets/animals.html'));
//   });
// //displays the animals page 
//   app.get('/zookeepers', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/assets/zookeepers.html'));
//   });

//requiring path 
const path = require("path");
//initializing router with express
const router = require("express").Router();

//home page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

//send the html pages to render the pages
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// if we don't have a URL send them to our index html page 
router.get("*", (req, res) => {
    res.send(404);
});

module.exports = router;
