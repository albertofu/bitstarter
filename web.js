var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var content = fs.readFileSync("index.html",ecoding='utf8');

app.get('/', function(request, response) {
//  response.send('Hello World!');
  response.send(content);


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
