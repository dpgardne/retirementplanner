angular.module('userControllers', ['userServices'])

.controller('signupController', function($http, $location, $timeout, User){
  const app = this;
    this.newUser = function(userData) {
      app.loading = true;
      app.errorMsg = false;
      User.create(app.userData).then(function(data){
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
