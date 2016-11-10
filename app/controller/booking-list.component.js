angular.
  module('bookingApp').
  component('bookingList', {
    template:
      '<ul>' +
        '<li ng-repeat="booking in $ctrl.bookings">' +
            '<span>{{booking.name}}</span>' +
            '<p>{{booking.id}}</p>' +
          '</li>' +
        '</ul>',
      controller: function BookingListController() {
      this.bookings = [
        {
          name: 'Asia',
          id: 1
        }, {
          name: 'Europe',
          id: 2
        }, {
          name: 'North America',
          id: 3
        }
      ];
    }
  });
