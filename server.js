//everything that will be required 

const express = require('express');
const path = require("path");
const fs = require("fs");

 const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/html');

//declaring which port we will listen on 
const PORT = process.env.PORT || 3001;

//intializing express server 
const app = express();



// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//makes css files availbale to the server 
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// code to have the application listening for request 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });