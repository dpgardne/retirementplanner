angular.module('userServices', [])
.factory('User', function($http){
  userFactory = {}
  // User.create(userData)
  userFactory.create = function (userData) {
    return $http.post('api/users', userData)
  }
  return userFactory;
})
