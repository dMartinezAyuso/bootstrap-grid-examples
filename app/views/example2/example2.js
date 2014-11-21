'use strict';

angular.module('myApp.example2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example2', {
    templateUrl: 'views/example2/example2.html',
    controller: 'Example2Ctrl'
  });
}])

.controller('Example2Ctrl', ['$scope', '$location', function($scope, $location) {
    $scope.goExample1 = function() {
        $location.path('/example1');
    };
    $scope.goExample3 = function() {
        $location.path('/example3');
    };
}]);
