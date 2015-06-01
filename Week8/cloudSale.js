var app = angular.module('cloudSale', []);

app.controller('cloudController', function($scope, $http){
	var list = this;
	$scope.itemList = [];
	$scope.cartList = [];

	$http.get('http://mean.codingcamp.us:5555/jerry/product')
	.success(function(data){
		$scope.itemList = data;
	});

	$http.get('http://mean.codingcamp.us:5555/jerry/cart')
	.success(function(data){
		$scope.cartList = [data]; // FIX WHEN SERVER IS FIXED REMOVE []
		console.log($scope.cartList)
	});

	$scope.saveToCart = function(product){
		$http.post('http://mean.codingcamp.us:5555/jerry/cart', product);
		
  
	};
});


// http://mean.codingcamp.us:5555/jerry