var app = angular.module('crudApp', ['crudServices']);

app.controller('mainController', ['$scope', '$http', 'Users', function($scope, $http, Users){
  $scope.message = "Hellow!";

  var refresh = function() {
    Users.all().success(function(data) {
      $scope.userList = data;
      $scope.user = "";
    });
  };
  refresh();

  $scope.createUser = function() {
    Users.create($scope.user).success(function(data) {
      console.log(data);
      refresh();
    });
  };

  $scope.remove = function(id) {
    $http.delete('/api/users/' + id).success(function(data){
      refresh();
    });
  };

  $scope.edit = function(id) {
    Users.get(id).success(function(data) {
      $scope.user = data;
    });
  };

  $scope.update = function(id) {
    Users.update($scope.user._id, $scope.user).success(function(data) {
      refresh();
    });
  };

}]);
