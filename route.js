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

.when("/second/:days",{
  templateUrl: "pages/forecastpage.html",
  controller: "secondController"
})

});
