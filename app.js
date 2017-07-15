var express = require('express');
var app = express();
var path = require('path');

app.use('/static', express.static('dist/static'))

app.get('/wxmarket/', function(req, res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(3000);
console.log('listen on 3000')
