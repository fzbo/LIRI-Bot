//KEY SOURCES FILE
var keys = require("./keys.js");

// DEPENDENCIES
// =====================================
// Import the Keys file
var keys = require("./keys.js");

// Import the Twitter NPM package.
var Twitter = require("twitter");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the request npm package.
var request = require("request");
//KEY SOURCES FILE
var keys = require("./keys.js");

//DEPENDENCIES
var Twitter = require("twitter");
var Spotify = require("spotify");
var request = require("request");
var fs = require("fs");

var arg = process.argv[2];

//FUNCTION FOR RUNNING TWITTER


var myTweets = function() {
  var client = new Twitter(keys.twitterKeys);

  var params = {screen_name: 'pepperpawz'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  
  });

};

if (arg === "my-tweets") {
  myTweets();
}