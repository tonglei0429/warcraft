var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('http://127.0.0.1:3000!');
});
