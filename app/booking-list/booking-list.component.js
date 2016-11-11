angular.
  module('bookingList').
  component('bookingList', {
    templateUrl: 'booking-list/booking-list.template.html',
      controller: function BookingListController($http) {
        var self = this;
        $http.get('booking/list').then(function success(response) {
          self.bookings = response.data;
        }, function error(response){
          console.log(response)
        });
    }
  });
