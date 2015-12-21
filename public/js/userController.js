var app = angular.module('crudApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
  $scope.message = "Hellow!";

  var refresh = function() {
    $http.get('/api/users').success(function(res) {
      $scope.userList = res;
    });
  };

  refresh();

  $scope.createUser = function() {
    User.create({
      npm : $scope.user.npm,
      nama : $scope.user.nama,
      kelas : $scope.user.kelas
    })
      .then(function(data) {
        console.log('Create angluar data.');
        refresh();
      });
  };

}]);
