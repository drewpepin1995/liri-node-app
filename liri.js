require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: "0946cdb796cc43bcbd3d47d69844d601",
    secret: "2bfcacebeff54ac7946af1621506c856"
});
// var axios = requre('axios');
var liriReturn = process.argv[2];
// var infoName = process.argv[3];

switch (liriReturn) {
    case "spotify-this-song":
        spotifyThis();
        break;
    
    case "concert-this":
        concertThis();
        break;

    case "movie-this":
        moviesThis();
        break;
    
    case "do-what-it-says":
        doWhatItSays();
        break;

    default: console.log("\nType any of these commands after 'node liri.js' : " +
                            "\nspotify-this-song 'any song title here'" + 
                            "\nmovie-this 'any movie title here'" + 
                            "\nconcert-this 'artist/band name here'" + 
                            "\ndo-what-it-says");
    
};

function spotifyThis(trackName) {
    var trackName = process.argv.slice(3, process.argv.length).join(" ")
    console.log(trackName);
    spotify.search({
        type: 'track',
        query: trackName,
        limit: 5
    })
    .then(function (response){
        console.log(response.tracks.items[1]);
    })
    .catch(function(err){
        console.log("Error occurred: " + err);
    });
};