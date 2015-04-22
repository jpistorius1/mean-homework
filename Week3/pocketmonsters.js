var ask = require('readline-sync');
var colors = ["blue", "red", "yellow", "green", "turquiose"];
var moods = ["hungry", "happy", "bored"];
var monsterHealth = 100;

var monster = function(color){
	this.health = monsterHealth;
	this.mood = "happy";
	this.color = color; 
};

var startOfGame = function(){
	var myMonster = generateMonster();
	timerOfRequest();
	console.log("You have a new Monster! You're lucky and got a " + myMonster.color);
	console.log("Your monster has " + myMonster.health + "% and is " + myMonster.mood);
};

var generateMonster = function(){

	var color = colors[Math.floor(Math.random() * 5)];
	var newMonster = new monster(color);
	return newMonster;	
};

function timerOfRequest(){
	var fed = false;
	var bored = false;
	setInterval(function () {
		if (myMonster.mood == moods[0]){
			checkFed(fed);
			fed = false;
		}

		console.log(myMonster.health);

		var newMood = moods[Math.floor(Math.random() * 3)];
		myMonster.mood = newMood;
		console.log("Your monster is " + newMood);

	if (myMonster.mood == [0]){
		var answer = ask.question("Would you like to feed your pet? Yes or No? ");
		if (answer.toLowerCase() == "yes"){
			fed = true;
		} else {
			(answer.toLowerCase() == "no");
			fed = false;
			}
		} 
	} else (myMonster.mood == [2]){
		var answer = ask.question("Would you like to play a game with your pet? Yes or No? ");
		if (answer.toLowerCase() == "yes"){
			bored = true;
		} else {
			(answer.toLowerCase() == "no"){
			bored = false;
		}
	}


	}, 2000);
} 

function checkFed(fed){
	if (fed == true){
		myMonster.health = 100;
	} else {
		myMonster.health -= 10; 
	}
}


function checkBored(bored){
	if (bored == true){
		myMonster.moods = [2];
	} else {
		myMonster.health -= 10; 
	}
}

function checkHealth(){
	if (myMonster.health == 0){
		var endOfTheGame = ask.question("Would you like to start over? ")
		if (endOfTheGame.toLowerCase() == 'yes'){
			startOfGame();
		}
	}
}