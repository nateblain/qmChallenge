var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

require('./config/middleware')(app, express);

app.listen(port);
console.log('Listening on port ' + port + '!');
