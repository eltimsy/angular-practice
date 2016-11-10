'use strict';

var path = require('path');
var bookings = {
  1: "Asia",
  2: "Europe",
  3: "Africa",
  4: "Australia",
  5: "South America",
  6: "North America",
  7: "Antarica"
};

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/app/index.html'));
        });
    app.get('/booking/list', (req, res) => {
      res.send(200, bookings);
    })
    app.get('/booking/id/:id', (req, res) => {
      console.log(req.params.id)

      if(bookings[req.params.id]){
        res.send(200, bookings[req.params.id]);
      } else {
        res.send(404, "404: no booking found")
      }

    })
};
