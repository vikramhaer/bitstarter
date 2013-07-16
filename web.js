var express = require('express');
var fs = require('fs');

var home = "index.html";
var mybuffer = new Buffer(fs.readFileSync(home));
var mystring = mybuffer.toString();


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
