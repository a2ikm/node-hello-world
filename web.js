var express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
  res.send('Hello, Hello, My World!!');
});

app.get('/echo', function(req, res) {
  res.send("query 'q' = " + req.query["q"]);
});

app.get('/:id', function(req, res) {
  res.send('id = ' + req.params.id);
}); 

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

