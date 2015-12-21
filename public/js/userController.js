var app = angular.module('crudApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.message = "Hellow!";
  var refresh = function() {
    $http.get('/api/users').success(function(data) {
      $scope.userList = data;
      $scope.user = "";
    });
  };

  refresh();

  $scope.createUser = function() {
    $http.post('/api/users', $scope.user).success(function(data) {
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
    $http.put('/api/users/' + id).success(function(data) {
      $scope.user = data;
    });
  };

  $scope.update = function(id) {
    $http.put('/api/users/' + $scope.user._id, $scope.user).success(function(data) {
      refresh();
    });
  };

}]);
