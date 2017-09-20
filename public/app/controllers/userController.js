angular.module('userControllers', [])

.controller('signupController', function($http, $location, $timeout){
  const app = this;
    this.newUser = function(userData) {
      app.loading = true;
      app.errorMsg = false;
      console.log('form submitted')
      $http.post('/api/users', this.userData).then(function(data){
          if(data.data.success) {
            app.loading = false;
            app.successMsg = data.data.message + '..Redirecting to home';
            $timeout(function(){
              $location.path('/')
            }, 2000);

          } else {
            app.loading = false;
            app.errorMsg = data.data.message;

          }
      });
    };
});
