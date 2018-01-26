console.log("Hello there"); 

var Twit = require('twit'); 

var config = require('./config')

var T = new Twit(config);


//get() request like search by hashtag, by location, by user, etc. 


T.get('search/tweets', { q: 'hobbits', count: 3 }, function(err, data, response) {
  console.log(data)
})


/*var tweets = data.statuses; 

for (var i = 0; i < tweets.length; i++) {
	console.log(tweets[i].text);
}


*/





