var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ryaninbrazil";
var GITHUB_TOKEN = "4152db697d53e2f1881b88dd9465c48ecdd9721c";
var repoOwner =  process.argv[2]
var repoName =  process.argv[3]
function getRepoContributors(repoOwner, repoName, cb) {
    // ...
  }
  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });  

//gitHub API requires that  User-Agent be filled out as the userid of the requestor
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN 
+ '@api.github.com/repos/' +  repoOwner + '/' + repoName +
 '/contributors';
 
 const options = {
    url:
      requestURL,
    headers: {
      "User-Agent": GITHUB_USER
    }
  };

  function downloadImageByURL(url, filePath) {  
   request.get(url) 
       .pipe(fs.createWriteStream(filePath));               
    
  }

  request(options, 
    function(err, response, body){
        var contList = JSON.parse(body);
        // console.log(contList);
        contList.forEach(function(element) {
            // console.log('each',element.avatar_url, 
            //     element.login);
            downloadImageByURL(
                element.avatar_url,
                'avatar/' + element.login + '.jpg'
            )
            })
    });
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
      });
