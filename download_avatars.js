var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ryaninbrazil";
var GITHUB_TOKEN = "4152db697d53e2f1881b88dd9465c48ecdd9721c";

function getRepoContributors(repoOwner, repoName, cb) {
    // ...
  }
  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });  

//gitHub API requires that  User-Agent be filled out as the userid of the requestor
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN 
+ '@api.github.com/repos/' + 'jquery' + '/' + 'jquery' +
 '/contributors';
 
 const options = {
    url:
      requestURL,
    headers: {
      "User-Agent": GITHUB_USER
    }
  };

  
  request(options, 
    function(err, response, body){
        var contList = JSON.parse(body);
        console.log(contList);
        contList.forEach(function(element) {
            console.log('each',element.avatar_url, 
                element.login);
            })
    });


    console.log(requestURL);
    