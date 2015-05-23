//Data

var app = angular.module('cartoonNostalgiaApp');

app.service('modelService', function(){
	this.characterList = [
		{
			characterName: "Doug Funnie",
			imgURL: "http://fc06.deviantart.net/fs40/f/2009/012/b/0/Doug_Funnie_by_SUNMAN107.png",
			userName: "System"
		},
		{
			characterName: "Donatello",
			imgURL: "http://wallpapersko.com/wp-content/uploads/2014/08/Donatello-Teenage-Mutant-Ninja-Turtles-HD-Wallpaper.jpg",
			userName: "System"
		},
		{
			characterName: "Darkwing Duck",
			imgURL: "http://img4.wikia.nocookie.net/__cb20110412005457/disney/images/a/a9/DarkwingDuck.jpg",
			userName: "System"
		},
		{
			characterName: "Baloo",
			imgURL: "http://img3.wikia.nocookie.net/__cb20101215003019/disney/images/5/5b/15420.jpg",
			userName: "System"
		}
	] 
});