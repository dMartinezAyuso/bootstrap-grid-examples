'use strict';

angular.module('myApp.example6', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example6', {
    templateUrl: 'views/example6/example6.html',
    controller: 'Example6Ctrl'
  });
}])

.controller('Example6Ctrl', ['$scope','$location',function($scope,$location) {
    $scope.goExample1 = function() {
        $location.path('/example1');
    };
    $scope.goExample5 = function() {
        $location.path('/example5');
    };
}]);
