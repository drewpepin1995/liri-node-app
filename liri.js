require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify({
    id: "0946cdb796cc43bcbd3d47d69844d601",
    secret: "2bfcacebeff54ac7946af1621506c856"
});
let axios = require('axios');
let liriReturn = process.argv[2];

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
    let trackName = process.argv.slice(3, process.argv.length).join(" ");
    spotify.search({
        type: 'track',
        query: trackName,
        limit: 5
    })
        .then(function (response) {
            response.tracks.items.forEach(function (number) {
                console.log(" ");
                console.log("Artist(s): " + number.album.artists[0].name);
                console.log("Song Name: " + number.name);
                console.log("Spotify Preview: " + number.preview_url);
                console.log("Album: " + number.album.name);
            })
        })
        .catch(function (error) {
            console.log("Error occurred: " + error);
        });
};

function moviesThis() {
    let movieTitle = process.argv.slice(3, process.argv.length).join(" ");
    let queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieTitle + "";

    if (movieTitle === "") {
        let movieTitle = process.argv.slice(3, process.argv.length).join(" ");
        let queryURL = "http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody";

        axios.get(queryURL)
            .then(function (response) {


                console.log("Title: " + response.data.Title)
                console.log("Year: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Actors: " + response.data.Actors)
                console.log("Plot: " + response.data.Plot)
                console.log("IMDB Rating: " + response.data.Ratings[0].Value)
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);


            })
    } else {
        axios.get(queryURL)
            .then(function (response) {


                console.log("Title: " + response.data.Title)
                console.log("Year: " + response.data.Year)
                console.log("Rated: " + response.data.Rated)
                console.log("Actors: " + response.data.Actors)
                console.log("Plot: " + response.data.Plot)
                console.log("IMDB Rating: " + response.data.Ratings[0].Value)
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);


            })
            .catch(function (error) {
                console.log("Error occurred: " + error);


            })

    };


};