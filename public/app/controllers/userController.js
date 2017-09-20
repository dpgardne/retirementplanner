angular.module('userControllers', [])

.controller('signupController', function($http){
    this.newUser = function(userData) {
      console.log('form submitted')
      console.log(this.userData)
      $http.post('/api/users', this.userData);
    }
})
