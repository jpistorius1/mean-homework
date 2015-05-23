//Transmits data to UI

var app = angular.module('cartoonNostalgiaApp', []);

app.controller('cartoonNostalgiaCtrl', function($scope, modelManager){
	$scope.newCharacter = {};
	$scope.userCharactersSubmitted = function(){
		//return $scope.
	};
	$scope.allCharacters = modelManager.getCharacters();
	$scope.addCharacter = modelManager.addCharacter($scope.newCharacter);
});