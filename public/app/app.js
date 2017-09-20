angular.module('retirementApp', ['retirementRoutes', 'userControllers', 'userServices', 'mainController', 'authServices'])

.config(function($httpProvider){
  $httpProvider.interceptors.push('AuthInterceptors')
})
