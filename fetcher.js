const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body: ', body); // Print the HTML for the Google homepage.
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log(`Successfully saved file to ${args[1]}`);
    //console.log(`Downloaded and saved ${ } bytes to ${args[1]}`)
  });
});


// node fetcher.js http://www.example.edu ./index.html