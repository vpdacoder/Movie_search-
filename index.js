var express    = require("express");
    app        = express();
    bodyParser = require('body-parser');
    request    = require('request');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine","ejs");

app.get("/results", (req,res) => {
  request('http://www.omdbapi.com/?apikey=thewdb&s=bond', function (error, response, body) {
  var parsedData = JSON.parse(body);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  res.send(parsedData); // Print the HTML for the Google homepage.
});
});


app.listen(3000, (req,res) =>{
  console.log("3000 is the magic port");
});
