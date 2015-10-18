var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('build'));
app.use('/store', express.static(__dirname + '/node_modules/store/'));
app.use('/uuid', express.static(__dirname + '/node_modules/node-uuid/'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

var server = app.listen(process.env.PORT || 1337, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('TODO ES6 app listening at http://' + host + ':' + port);
});
