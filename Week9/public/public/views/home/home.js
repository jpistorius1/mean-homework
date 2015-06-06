var app = angular.module('tweet');

app.controller('homeController', ['$scope', function($scope, $http){
	$scope.test = "Hello";
}]);