// DEPENDENCIES
var express = require("express");

// Tells node that an "express" server is being created and stores it as a variable
var app = express();

/* Port setup to set the listener to. 
It's set to listen for what ever port is
assigned by a remote server or localhost 8080*/
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This points the server to out rout files.
require("./app/routing/apiRouts")(app);
require("./app/routing/htmRouts")(app);

/* Now, now the bellow tells the the app to listen for instruction in the given,  
which was specified above*/
app.listen(PORT, function() {
  console.log("App is listening on port: " + PORT);
});
