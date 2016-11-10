'use strict';

var path = require('path');
var bookings = [
  { id: 1,
    name: "Asia"},
  { id: 2,
    name: "Europe"},
  { id: 3,
    name: "Africa"},
  { id: 4,
    name: "Australia"},
  { id: 5,
    name: "North America"},
  { id: 6,
    name: "South America"}
  ];

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
    app.get('/booking/list', (req, res) => {
      res.send(200, bookings);
    })
    app.get('/booking/id/:id', (req, res) => {
      let match = false;

      bookings.forEach(function(element) {
        if(element.id === parseInt(req.params.id)){
          return match = true;
        }
      })
      if(match){
        res.send(200, bookings[req.params.id]);
      } else {
        res.send(404, "404: no booking found")
      }

    })
};
