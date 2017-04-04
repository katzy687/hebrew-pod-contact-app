var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

// for launching in browser
var open = require('open');

var port = process.env.PORT || 4000;

app.use('/', express.static(__dirname + '/public/src'));
// app.use(express.static('/public/src/node_modules'));

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port, function(){
  console.log('up and running on port ' + port);
  console.log('Launching Browser!');
  open("http:localhost:" + port);
});
