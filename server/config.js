'use strict';

var path = require('path');

module.exports = {
        root: path.normalize(__dirname + '/../../..'),
        port: process.env.PORT || 7070,
        ip: process.env.IP || '0.0.0.0',
}