require("dotenv").config();

var keys = require("./keys");


var twitter = require('twitter');

var spotify = require('node-spotify-api');

var request = require('request');

var fs = require('fs')

var spot = require('spotify-web-api-node');

var client = new twitter(
 keys.twitter
);

var spotify = new spotify(
    keys.spotify
   );

   function myTweets (){

        console.log(process.argv[2]);

        var params = {screen_name: 'BrianElliston_'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
         if (!error) {
           for (i = 0; i < tweets.length; i++){
            console.log(tweets[i].text);

           }
           
         }
        });
   };

   function mySpotify (){

        console.log(process.argv[2]);

        // spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        //     if ( err ) {
        //         console.log('Error occurred: ' + err);
        //         return;
        //     }
         
        //     // Do something with 'data' 
        // });

        // var spotifyApi = new SpotifyWebApi({
        //     clientId : 'fcecfc72172e4cd267473117a17cbd4d',
        //     clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
        //     redirectUri : 'http://www.example.com/callback'
        //   });

        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then(function(data) {
          console.log('Artist albums', data.body);
        }, function(err) {
          console.error(err);
        });

   };

   function myDoIt (){
    
        console.log(process.argv[2]);
    
       };

   function myImdb (){
    
        console.log(process.argv[2]);
    
       };

       var command = process.argv[2];

       if (command === "my-tweets"){
        myTweets();
        

       }
       
       else if (command === "spotify-this-song"){
        mySpotify();
       }

       else if (command === "movie-this"){

        myImdb();
       }

       else if (command === "do-what-it-says"){

        myDoIt();
       }

       else {
           console.log("Quit screwing around!!")
       }

