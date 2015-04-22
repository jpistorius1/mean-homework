var ask = require('readline-sync');
var question = ask.question('What was Jackie Robinson\'s number? ');

while(question !== 42){
		if (question == 42){
			break;
		} else {
			var question = ask.question('What was Jackie Robinson\'s number? ');
}
}