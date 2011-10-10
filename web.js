var express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
    res.send('Hello, Hello, My World!!');
  });

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
  });
