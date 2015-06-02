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
		$scope.cartList = data;
		console.log($scope.cartList)
	});

	$scope.saveToCart = function(product){
		
		$scope.cartList.push(product);
		$http.post('http://mean.codingcamp.us:5555/jerry/cart', $scope.cartList)
		
  
	};
});


// http://mean.codingcamp.us:5555/jerry