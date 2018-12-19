// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Push user data into friends array
    // var bestMatch should loop through friends data finds and holds best match 
        // userData = request.data and this will be what's brought over from when user hits submit
        // var userScore
    // loop all friend's score and come up with difference for each person and user score. Use code below
    // totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    // Need logic to compare total diff of each to decide who's best match (if else) 
    // Calculate difference between scores
      // Add to total diff
      // If sum of diff is less than total score, then they become best match
    // return the best match as json for use in display of modal
// write validator for form and run it on submit that everything is not null


    // body is available since we're using the body parsing middleware
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendsData.length = [];

//     res.json({ ok: true });
//   });
};
