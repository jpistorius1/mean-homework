var ask = require('readline-sync');
console.log("Incumbent");
console.log("Candidate 1");
console.log("Candidate 2");

var voting = ask.question('Who are you going to vote for? ');
console.log(voting);
	if (voting.toLowerCase() == 'incumbent'){
		console.log('You voted for the Incumbent');
	} else if  (voting.toLowerCase() == 'candidate 1'){
		console.log('You voted for the first candidate');
	} else if (voting.toLowerCase() == 'candidate 2') {
		console.log('You voted for the second candidate');
	} else {
		console.log("You didn't pick anyone");
	}

