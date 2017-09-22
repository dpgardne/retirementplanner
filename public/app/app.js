angular.module('retirementApp', ['retirementRoutes', 'userControllers', 'userServices', 'mainController', 'authServices', 'retirementApplication'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors')
})
