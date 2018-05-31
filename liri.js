
// Read and set environment variables
    require("dotenv").config();
    var Twitter = require('twitter');
    var Spotify = require('node-spotify-api');
    var request = require("request");
    var keyCodes = require("./keys.js");

// console.log(process.env.TWITTER_CONSUMER_KEY) 
// console.log(process.env.TWITTER_CONSUMER_SECRET)
// console.log(process.env.SPOTIFY_ID)
// console.log(process.env.SPOTIFY_SECRET)

// Store all of the arguments in an array
    var nodeArgs = process.argv;

       

    

//------------------TWITTER-------------------------TWITTER---------------------------TWITTER----------------------------//
if (nodeArgs[2] === "my-tweets") {

    var keyCodes = require("./keys.js");
    
    var client = new Twitter(keyCodes.twitter);

    var params = {

        q: 'nba',
        
        count: 20
        
        } 
    
        client.get('search/tweets', params,searchedData); 
        
        function searchedData(err, data, response) {

        console.log(data.statuses[0]);
        // console.log("==============================================");
        // console.log("");
        // console.log("Tweeted at: " + (data).statuses.created_at);
        // console.log("Tweet: " + (data).statuses.text);
        // console.log("");
        // console.log("==============================================");
        }; 


// console.log(client);
// console.log(spotify);

  

//------------------TWITTER-------------------------TWITTER---------------------------TWITTER----------------------------//



//------------------SPOTIFY-------------------------SPOTIFY---------------------------SPOTIFY----------------------------//
}else if(nodeArgs[2] === "spotify-this-song"){

    var keyCodes = require("./keys.js");

    var spotify = new Spotify(keyCodes.spotify);




//------------------SPOTIFY-------------------------SPOTIFY---------------------------SPOTIFY----------------------------//



//------------------OMDB---------------------------OMDB----------------------------OMDB------------------------------//
}else if(nodeArgs[2] === "movie-this"){

    // Store all of the arguments in an array
    var nodeArgs = process.argv;
    
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
    
    // Run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
 
        // console.log(JSON.parse(body));
        // Parse the body of the site and recover just the imdbRating
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

//------------------OMDB---------------------------OMDB----------------------------OMDB------------------------------//




//------------------DWIS---------------------------DWIS----------------------------DWIS------------------------------//
}else if(nodeArgs[2] === "do-what-it-says"){

};




//------------------DWIS---------------------------DWIS----------------------------DWIS------------------------------//