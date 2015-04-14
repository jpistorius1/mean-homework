var ask = require('readline-sync');
var userChoice = ask.question("Do you choose rock, paper or scissors? ");
var user_to_lower = userChoice.toLowerCase();
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
		console.log("The computer chooses: " + computerChoice);

var compare = function(choice1,choice2)
{
	if (choice1 === choice2){
			return "The result is a tie!"
	}
	else if (choice1 === "rock") {
		if (choice2 === "scissors"){
			return "Rock wins";
	}	else {
			return "Paper wins";
	}
	}
	else if (choice1 === "paper"){
		if (choice2 === "rock"){
			return "Paper wins";
		}else {
			return "Scissors wins";
		}
	}else if (choice1 === "scissors"){
		if (choice2 === "rock"){
			return "Rock wins";
		}else {
			return "Scissors wins";
		}
	}
}
console.log(compare(user_to_lower,computerChoice));