'use strict';

angular.module('myApp.example1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example1', {
    templateUrl: 'views/example1/example1.html',
    controller: 'Example1Ctrl'
  });
}])

.controller('Example1Ctrl', ['$scope','$location',function($scope,$location) {
	$scope.goExample2 = function() {
		$location.path('/example2');
	};
}]);