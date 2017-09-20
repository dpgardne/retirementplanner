angular.module('authServices', [])

.factory('Auth', function($http){
  authFactory = {}
  // User.create(userData)
  authFactory.login = function (loginData) {
    return $http.post('api/authenticate', loginData)
  }
  return authFactory;
})
