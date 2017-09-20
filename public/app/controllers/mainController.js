angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $timeout, $location){
  const app = this;

  if(Auth.isLoggedIn()) {
    console.log('Success user is logged in')
  } else {
    console.log('failure user is logged in')
  }

    this.doLogin = function(loginData) {
      app.loading = true;
      app.errorMsg = false;
      Auth.login(app.loginData).then(function(data){
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
