'use strict';

angular.module('myApp.example3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example3', {
    templateUrl: 'views/example3/example3.html',
    controller: 'Example3Ctrl'
  });
}])

.controller('Example3Ctrl', ['$scope','$location',function($scope,$location) {
    $scope.goExample2 = function() {
        $location.path('/example2');
    };
    $scope.goExample4 = function() {
        $location.path('/example4');
    };
}]);
