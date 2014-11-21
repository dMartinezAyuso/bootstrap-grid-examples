'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.example1',
  'myApp.example2',
  'myApp.example3',
  'myApp.example4',
  'myApp.example5',
  'myApp.example6',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/example1'});
}]);
