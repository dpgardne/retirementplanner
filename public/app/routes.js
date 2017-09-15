angular.module('retirementRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/tree/home.html'
  })

  .when('/faq', {
    templateUrl: 'app/views/tree/faq.html'
  })

    .otherwise({redirectTo: '/'})
  //end

  //remove # in link before this will work inject $locationProvider above
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});

//end
})
