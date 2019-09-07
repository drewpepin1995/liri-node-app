require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require('node-spotify-api');
var axios = requre('axios');
var liriReturn = process.argv[2];
var infoName = process.argv[3];

switch (liriReturn) {
    case "spotify-this-song":
        function spotifyThis();
        break;
    
    case "concert-this":
        function concertThis();
        break;

    case "movie-this":
        function moviesThis();
        break;
    
    case "do-what-it-says":
        function doWhatItSays();
        break;

    default: console.log("\nType any of these commands after 'node liri.js' : " +
                            "\nspotify-this-song 'any song title here'" + 
                            "\nmovie-this 'any movie title here'" + 
                            "\nconcert-this 'artist/band name here'" + 
                            "\ndo-what-it-says");
    
};