//Manages data

var app = angular.module('cartoonNostalgiaApp');

app.service('modelManager', function(modelService){
	
	this.getCharacters = function(){
		return modelService.characterList;
	}
	this.addCharacter = function(newCharacter){
		if (newCharacter.name == undefined || newCharacter.imgURL == undefined || newCharacter.userName == undefined){
			alert("You didn't fill out the form")
		} else {
		modelService.characterList.push(newCharacter);
		}
	}
	this.deleteCharacter = function(index){
		modelService.characterList.splice(index, 1);
	}
	
});