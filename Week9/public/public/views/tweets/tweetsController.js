var app = angular.module('tweet');

app.controller('tweetsController', ['$scope', '$http', function($scope, $http){

	$http.get('http://mean.codingcamp.us:3377/tweet')
	.success(function(data){
		$scope.allTweets = data;
	})
	.error(function(error){
		$scope.allTweets = "Sorry, you've experienced an error.  How does it feel.  Please be honest.  This is for posterity.";
	});

	
}]);