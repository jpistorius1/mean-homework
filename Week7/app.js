//Transmits data to UI

var app = angular.module('cartoonNostalgiaApp', []);

app.controller('cartoonNostalgiaCtrl', function($scope, modelManager){
	$scope.newCharacter = {};
	$scope.allCharacters = modelManager.getCharacters();
	
	$scope.addCharacter = function(){
		modelManager.addCharacter($scope.newCharacter);
		$scope.newCharacter = {};
	}
	$scope.deleteCartoon = function(index){
		modelManager.deleteCharacter(index);
	}

});