// ===============================================================================
// LOAD DATA
// Linking routes to a "data" source ("/api/friends").
// This data source holds the array, friendsData. It's being pulled bellow.
var friendsData = require("../data/friends");
// ===============================================================================
// ROUTING
// ===============================================================================

// module.export allows the resulting data to be accesses in another file
module.exports = function(app) {
  // This initially access the entire array and returns it as JSON
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
    /* Grabs the data submitted by user for processing 
    to for processing and  pushing*/

    var userData = req.body;
    var userAnswers = userData.scores;
    

    // Will hold best matches name, photo and comparison
    var bestMatch ={
    yourMatch : "",
    yourMatchImage : "",
    friendDifference : Infinity
    };

    // loop all friend's score and come up with difference for each person and user score. Use code below
    var totalDifference = 0;

    for (var i = 0; i < friendsData.length; i++) {
      // console.log("friendsData = " + JSON.stringify(friendsData[i]));
      var currentFriend = friendsData[i];
      

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        console.log("First total dif" + totalDifference);
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userAnswers[j];
        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      console.log("here is the userScore" + currentUserScore);
      console.log("here is the matchScore" + currentFriendScore);
      console.log("here is the total dif" + totalDifference);
      
       // If the sum of differences is less then the differences of the current "best match"
       if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.yourMatch = currentFriend.name;
        bestMatch.yourMatchImage = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
        console.log("#yourMatch" + bestMatch.yourMatch);
        console.log("#yourMatchImage" + bestMatch.yourMatchImage);
      }
      // for (var j = 0; j < userAnswers.length; j++) {
      //   // console.log("userAnswer: " + JSON.stringify(userAnswers[j]));
      //   totalDifference += Math.abs(
      //     parseInt(parseInt(friendsData[i].score - userAnswers[j]))
      //   );
      }

    friendsData.push(userData);
    console.log(bestMatch);

    res.json(bestMatch);

    // var bestMatch should loop through friends data finds and holds best match
    // ----userData = request.data and this will be what's brought over from when user hits submit
    // var userScore

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