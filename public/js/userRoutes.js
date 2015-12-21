var app = angular.module('crudRoutes', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "views/pages/index.html",
      controller: "mainController",
      controllerAs : "main"
    });

    $locationProvider.html5Mode(true);
});
