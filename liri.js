require("dotenv").config();

var keys = require("./keys");


var twitter = require('twitter');

var spotify = require('node-spotify-api');

var request = require('request');

var fs = require('fs')

var yourChoice = process.argv[3];


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

         else {

            console.log(error);
         }
        });
   };

   function mySpotify (){

        console.log(process.argv[2]);

        

        spotify.search({ type: 'track', query: yourChoice || 'dancing in the moonlight' }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
       
         console.log(data.tracks.items[0].name);
            // Do something with 'data' 
        });

       


   };

   function myDoIt (){
    
        console.log(process.argv[2]);
    
       };

   function myImdb (){
    
        console.log(process.argv[2]);
        request('http://www.omdbapi.com/?apikey=a2d0527a&s=' + (yourChoice || "it"), function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
          });
    
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

