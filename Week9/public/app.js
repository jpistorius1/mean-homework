var app = angular.module('tweet', ['ngRoute']);

app.config(function($routeProvider){
	var BASE_URL = "public/views";
	$routeProvider
	.when('/', {
		redirectTo: '/home'
	})
	.when('/home', {
		controller: 'homeController',
		templateUrl: BASE_URL + '/home/home.tpl.html'
	})
	.when('/tweets', {
		controller: 'tweetsController',
		templateUrl: BASE_URL + '/tweets/tweets.tpl.html'
	});
});

app.controller('tweetController', ['$scope', function($scope, $http){
	
}]);

