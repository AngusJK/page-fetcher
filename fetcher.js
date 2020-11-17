const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body: ', body); // Print the HTML for the Google homepage.
  
  //let size = 0;
  
  //console.log(size);

  fs.writeFile(args[1], body, err => {
    if (err) {
      console.log(err)
      return
    }
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);  
    })
  });
});


// node fetcher.js http://www.example.edu ./index.html

/*
fs.stat('/Users/joe/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  stats.isFile() //true
  stats.isDirectory() //false
  stats.isSymbolicLink() //false
  stats.size //1024000 //= 1MB
})
*/