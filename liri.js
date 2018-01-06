require("dotenv").config();

var keys = require("./keys");


var twitter = require('twitter');

var Spotify = require('node-spotify-api');

var request = require('request');

var fs = require('fs')

var client = new twitter(
 keys.twitter
);

// var spotify = new Spotify(
//     keys.spotify
//    );

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

