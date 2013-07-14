var fs = require('fs')

var express = require('express');

var app = express.createServer(express.logger());

var textBuffer = new Buffer(fs.readFileSync("index.html"), 'uftf-8');

app.get('/', function(request, response) {
  response.send(textBuffer.toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
