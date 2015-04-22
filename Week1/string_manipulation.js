
//var ask = require('readline-sync');


//console.log('Hello! My name is Betty. Help me get to know you!\n');
//var firstName = ask.question('What is your first name? ');

//Pulled from HW page. Below is my coding, obviously. 

//var greeting = 'hello';
//var greeting_upper = greeting.toUpperCase();

//console.log(greeting_upper);
//console.log(greeting.length);
//console.log(greeting + ' ' + 'How are you?');

//var test = 'this is just a really long sentence without any grammar like a crazy man';

//console.log(test.substring(36, 72));
//console.log(test.substring(17, 57));


var ask = require('readline-sync');
var firstName = ask.question('What is your first name? ');

	console.log(firstName+'?');
	console.log('How are you today,' + ' '+ firstName+'?');

var information = ask.question('What should I know about you, '+ firstName+"? Why don't you tell me about yourself: job, age, city you live in, height, etc? I'd like to know a great deal. ");

	console.log('So, '+firstName+', you tell me that I should know ' +information+'?');
	console.log(firstName+', did you know that you used '+ information.length +' characters? That is a lot.');
	console.log(firstName+', with that information the last few things you told me were: '+information.substring(20));

var howLong = ask.question('How many characters would you like me to print to the end? ');

	console.log(firstName+', so you want to see me count from the position of ' + howLong + ' until the end? Ok, we can do that. ');
	console.log(information.substr(howLong));