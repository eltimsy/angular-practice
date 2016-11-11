'use strict';

const express = require('express');
const path = require('path');
const config = require('./config');
const bodyParser = require('body-parser')
const app = express();
const server = require('http').createServer(app);

app.set('appPath', path.join(config.root, 'TimmyC/scenario-tim/app'));
app.set('view engine', 'html');
app.use(express.static("app"));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

require('./routes')(app);
app.use(function(req, res) {
    res.status(400);
    res.send('404: Page not Found');
 });

server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

exports = module.exports = app;
