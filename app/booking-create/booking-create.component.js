angular.
  module('bookingCreate').
  component('bookingCreate', {
    templateUrl: 'booking-create/booking-create.template.html',
    controller: function BookingCreateController($scope, $http, $location) {
        $scope.booking = {}
        $scope.submitForm = function() {
          $http({
            method: 'POST',
            url: '/booking/new',
            data: $scope.booking.name,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function(response) {
            $scope.booking = {}
            $location.path('/booking');
          })
        }
      }

  });
