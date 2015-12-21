var app = angular.module('crudServices', []);

app.factory ('Users', ['$http', function($http) {
  return {
    get : function() {
      return $http.get('/api/users');
    },
    create : function(data) {
      return $http.post('/api/users', data)
    }
  }
}]);
