'use strict';

var express = require('express');
var path = require('path');
var config = require('./config');

var app = express();
var server = require('http').createServer(app);

app.set('appPath', path.join(config.root, 'TimmyC/scenario-tim'));
app.set('view engine', 'html');
require('./routes')(app);
app.use(function(req, res) {
    res.status(400);
    res.send('404: Page not Found', 404);
 });

server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

exports = module.exports = app;
