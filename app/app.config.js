angular.
  module('bookingApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/bookings', {
          template: '<booking-list></booking-list>'
        }).
        when('/bookings/create', {
          template: '<booking-create></booking-create>'
        }).
        otherwise('/bookings');
    }
  ]);
