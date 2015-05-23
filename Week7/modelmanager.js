//Manages data

var app = angular.module('cartoonNostalgiaApp');

app.service('modelManager', function(modelService){
	
	this.getCharacters = function(){
		return modelService.characterList;
	}
	this.addCharacter = function(newCharacter){
		modelService.characterList.push()
	}
});