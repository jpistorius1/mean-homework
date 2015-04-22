var timeDate = new Date();
var greeting = timeDate.getHours();

if (greeting <= 11){
	console.log("Good morning");
} else if (greeting <= 16){
	console.log("Good afternoon");
} else {
	console.log("Good evening");
}