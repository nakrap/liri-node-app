
// Read and set environment variables
require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var keyCodes = require("./keys.js");

    // console.log(process.env.TWITTER_CONSUMER_KEY) 
    // console.log(process.env.TWITTER_CONSUMER_SECRET)
    // console.log(process.env.SPOTIFY_ID)
    // console.log(process.env.SPOTIFY_SECRET)

// Create a variable to store user inputted arguments
var nodeArgs = process.argv;


//------------------TWITTER-------------------------TWITTER---------------------------TWITTER----------------------------//

// *** Searches Twitter for the latest 20 posts using the search term 'startups'. *** //


//Checks what user input is and does something if it's my-tweets.
if (nodeArgs[2] === "my-tweets") {

    var keyCodes = require("./keys.js");
    
    //Calls keys.js where all of our keys are stored.
    var client = new Twitter(keyCodes.twitter);

    //Sets up a variable for search parameters.
    var params = {
        q: 'startups',
        count: 20
    };
    
    client.get('search/tweets', params,searchedData); 
        
    //Runs our function telling it what to return.
    function searchedData(err, data, response) {
        var statusArray = data.statuses;
        // console.log(data.statuses);
        for (i=0; i<statusArray.length; i++){
            // console.log(statusArray);
            console.log("==============================================");
            console.log("");
            console.log("Tweeted by: " + statusArray[i].user.name);
            console.log("Tweeted at: " + statusArray[i].created_at);
            console.log("Tweet: " + statusArray[i].text);
            console.log("");
            console.log("==============================================");
        };
    };

}

//------------------TWITTER-------------------------TWITTER---------------------------TWITTER----------------------------//



//------------------SPOTIFY-------------------------SPOTIFY---------------------------SPOTIFY----------------------------//

// *** Takes a user inputted song and returns appropriate information to the console log. *** //


//Checks what user input is and does something if it's spotify-this-song.
else if(nodeArgs[2] === "spotify-this-song"){

    var keyCodes = require("./keys.js");

    //Calls keys.js where all of our keys are stored.
    var spotify = new Spotify(keyCodes.spotify);
    
    // Create an empty variable for holding the song name
    var songName = "";
   
    // Loop through all the words in the node argument, to make sure you account for songs with more than one word.
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
        songName = songName + "+" + nodeArgs[i];
        } else {
        songName += nodeArgs[i];
        }
    }

    if (!songName){
        songName = '99 problems';
    }

    // Takes the songName as inputted by the user, and returns the song info in the console.
    spotify.search({ type: 'track', query: songName, limit: 1}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }else {
            var songInfo = data.tracks.items[0];
            console.log("==============================================");
            console.log("");
            console.log("Artist: " + songInfo.artists[0].name);
            console.log("Song Title: " + songInfo.name);
            console.log("Album Name: " + songInfo.album.name);
            console.log("Preview URL: " + songInfo.preview_url);
            console.log("");
            console.log("==============================================");
        }
    });
}

//------------------SPOTIFY-------------------------SPOTIFY---------------------------SPOTIFY----------------------------//



//------------------OMDB---------------------------OMDB----------------------------OMDB------------------------------//

// *** Takes a user inputted movie and returns appropriate information to the console log. *** //


//Checks what user input is and does something if it's movie-this.
else if(nodeArgs[2] === "movie-this"){
    
    // Create an empty variable for holding the movie name
    var movieName = "";

    // Loop through all the words in the node argument, to make sure you account for movies with more than one word.
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
        } else {
        movieName += nodeArgs[i];
        }
    }
    
    if (!movieName){
        movieName = 'Mr. Nobody';
    }

    // Run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
    
            // Parse the body of the site and return all of the appropriate information.
            console.log("==============================================");
            console.log("");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("");
            console.log("==============================================");
        }
    });
}

//------------------OMDB---------------------------OMDB----------------------------OMDB------------------------------//



//------------------DWIS---------------------------DWIS----------------------------DWIS------------------------------//
else if(nodeArgs[2] === "do-what-it-says"){
    var dataArr;
	 fs.readFile("random.txt", "utf8", function(error, data) {
		if(error){
			return console.log(error);
		}
		// // Then split it by commas (to make it more readable)
		dataArr = data.split(',');
		
        // console.log(dataArr[1]);
	
        spotify.search({ type: 'track', query: dataArr[1], limit: 1}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }else {
                var songInfo = data.tracks.items[0];
                console.log("==============================================");
                console.log("");
                console.log("Artist: " + songInfo.artists[0].name);
                console.log("Song Title: " + songInfo.name);
                console.log("Album Name: " + songInfo.album.name);
                console.log("Preview URL: " + songInfo.preview_url);
                console.log("");
                console.log("==============================================");
            }
        });
    });    
};

var nodeArgs = process.argv;
var myArgs = process.argv.slice(2);

	fs.appendFile( "log.txt", myArgs + " ", function(err) {
		if(err){
			console.log(err);
		}
	}); 




//------------------DWIS---------------------------DWIS----------------------------DWIS------------------------------//