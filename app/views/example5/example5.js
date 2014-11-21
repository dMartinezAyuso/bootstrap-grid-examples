'use strict';

angular.module('myApp.example5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example5', {
    templateUrl: 'views/example5/example5.html',
    controller: 'Example5Ctrl'
  });
}])

.controller('Example5Ctrl', ['$scope','$location',function($scope,$location) {
    $scope.goExample4 = function() {
        $location.path('/example4');
    };
    $scope.goExample6 = function() {
        $location.path('/example6');
    };
}]);
