var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.listen(port, function(){
  console.log('Listening for requests on port:', port);
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});
