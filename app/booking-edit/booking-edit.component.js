angular.
  module('bookingEdit').
  component('bookingEdit', {
    templateUrl: 'booking-edit/booking-edit.template.html',
    controller: function BookingEditController($scope, $http, $location) {
        $scope.booking = {}
        var self = this;

        $http.get('booking/list').then(function success(response) {
          self.bookings = response.data;
        }, function error(response){
          console.log(response)
        });
        $scope.submitForm = function() {
          $http({
            method: 'POST',
            url: '/booking/edit',
            data: $scope.booking,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function(response) {
            $scope.booking = {}
            if(response.data === 'ok'){
              $location.path('/booking');
            } else {
              alert("invalid booking")
            }
          })
        }
      }

  });
