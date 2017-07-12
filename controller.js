// CONTROLLERS
myApp.controller('mainController', ['$scope','cityService', function($scope,cityService){
$scope.city = cityService.city;
//'Watching for changes in the input text field and updataing once changes have been made'
$scope.$watch('city', function() {
  cityService.city = $scope.city;
})
}]);

myApp.controller('secondController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams,
cityService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI =
  $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5d291dcae7f9d1a344a6ea02391feef7',
   { method: "JSONP" });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToFarenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDate = function(dt) {

    return new Date(dt * 1000);
  }
}]);
