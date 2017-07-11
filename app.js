var myApp = angular.module('myApp',['ngRoute','ngResource' ]);


// ROUTES
myApp.config(function ($routeProvider) {

$routeProvider

.when("/", {
  templateUrl: "pages/homepage.html",
  controller: "mainController"
})

.when("/second",{
  templateUrl: "pages/forecastpage.html",
  controller: "secondController"
})

});

// SERVICES
myApp.service('cityService', function(){
this.city = 'Washington, D.C';

})

// CONTROLLERS
myApp.controller('mainController', ['$scope','cityService', function($scope,cityService){
$scope.city = cityService.city;
//'Watching for changes in the input text field and updataing once changes have been made'
$scope.$watch('city', function() {
  cityService.city = $scope.city;
})
}]);

myApp.controller('secondController', ['$scope', '$resource', 'cityService',function($scope, $resource, cityService){

  $scope.city = cityService.city;

  $scope.weatherAPI =
  $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5d291dcae7f9d1a344a6ea02391feef7',
   { method: "JSONP" });

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2 });

    console.log($scope.weatherResult)
}]);
