var app = angular.module('crudServices', []);

app.factory ('Users', ['$http', function($http) {
  return {
    all : function() {
      return $http.get('/api/users');
    },
    create : function(data) {
      return $http.post('/api/users', data)
    },
    delete : function(id) {
      return  $http.delete('/api/users/' + id);
    },
    get : function(id) {
      return $http.get('/api/users/' + id);
    },
    update : function(id, data) {
      return $http.put('/api/users/' + id, data);
    }
  }
}]);
