var ask = require('readline-sync');
var integer1 = ask.question("Please enter the 1st number. ");
var integer2 = ask.question("Please enter the 2nd number. ");
var integer3 = ask.question("Please enter the 3rd number. ");
var integer4 = ask.question("Please enter the 4th number. ");
var integer5 = ask.question("Please enter the 5th number. ");
var integer6 = ask.question("Please enter the 6th number. ");
var integer7 = ask.question("Please enter the 7th number. ");
var integer8 = ask.question("Please enter the 8th number. ");
var integer9 = ask.question("Please enter the 9th number. ");
var integer10 = ask.question("Please enter the 10th number. ");

var smallest = integer1;
if (integer2 < smallest){
	smallest = integer2;
} 
if (integer3 < smallest){
	smallest = integer3;
} 
if (integer4 < smallest){
	smallest = integer4;
} 
if (integer5 < smallest){
	smallest = integer5;
} 
if (integer6 < smallest){
	smallest = integer6;
} 
if (integer7 < smallest){
	smallest = integer7;
} 
if (integer8 < smallest){
	smallest = integer8;
} 
if (integer9 < smallest){
	smallest = integer9;
} 
if (integer10 < smallest){
	smallest = integer10;
} 

console.log("The smallest number you've supplied is "+smallest);
