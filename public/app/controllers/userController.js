angular.module('userControllers', [])

.controller('signupController', function($http){
  const app = this;
    this.newUser = function(userData) {
      app.errorMsg = false;
      console.log('form submitted')
      $http.post('/api/users', this.userData).then(function(data){
          console.log(data.data.success)
          console.log(data.data.message)
          if(data.data.success) {
            app.successMsg = data.data.message;
          } else {
            app.errorMsg = data.data.message;

          }
      });
    };
});
