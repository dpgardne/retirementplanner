angular.module('authServices', [])

.factory('Auth', function($http){
  authFactory = {}
  // User.create(userData)
  userFactory.login = function (userData) {
    return $http.post('api/users', userData)
  }
  return authFactory;
})
