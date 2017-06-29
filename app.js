var myApp = angular.module('myApp',['ngRoute','ngResource' ]);

myApp.controller('mainController' ['$scope','$routeProvider' ,function($scope,$routeProvider){



}]);

myApp.controller('secondController' ['$scope', '$routeProvider',function($scope, $routeProvider){


}]);

myApp.config(function($routeProvider){
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
