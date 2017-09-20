angular.module('retirementRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/tree/home.html'
  })

  .when('/faq', {
    templateUrl: 'app/views/tree/faq.html'
  })

  .when('/signup', {
    templateUrl: 'app/views/tree/users/signup.html'
  })
  //when users go to register feed them the above view

    .otherwise({redirectTo: '/'})
  //end

  //remove # in link before this will work inject $locationProvider above
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

//end
})
