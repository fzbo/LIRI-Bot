//KEYS & DEPENDENCIES

//THIS WILL IMPORT API KEYS FILE
var keys = require("./keys.js");
//THE FOLLOWING WILL IMPORT NPM PACKAGES/MODULES
var Twitter = require("twitter");
var Spotify = require("spotify");
var request = require("request");
var fs = require("fs");

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

