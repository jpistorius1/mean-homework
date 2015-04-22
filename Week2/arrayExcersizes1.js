//number 1
function secondNumber(){
	var number = [2, 4, 5, 9, 10];
	return (number[1])
}
console.log(secondNumber());
// number 2

function numberList(){
	var array = [8, 7, 95, 19, 100];
	for (i = 0; i < 5; i ++){
		return array;
	}
}
console.log(numberList());

// number 3

function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
console.log(sumAll(1, 123, 115, 44, 88));

//number 4
var numberArray = [56, 32, 5, 89, 32];

function getLargestPosition(){
var largest = 0;
var largestIndex = -1;

for (var i = 0; i < numberArray.length; i++ ) {
    if (numberArray[i] > largest) {
       largest = numberArray[i];
       largestIndex = i;
          } 
    } return largestIndex;
}
function removeLargest(largestIndex){
	numberArray.splice(largestIndex, 1);
}
console.log(numberArray);

//number 5

function averageAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
console.log(averageAll(1, 123, 115, 44, 88) / 5);

//number 6

function splitting(){
	var string = "How are you doing today?";
	var splitApart = string.split(" ");
		return splitApart;
}
console.log(splitting());

//number 7

function sorted(){
	var string = "How are you doing today?";
	var lowerCasing = string.toLowerCase();
	var splitApart = lowerCasing.split(" ");
	var sorting = splitApart.sort();
	
		return sorting;
}
console.log(sorted());

//number 8

function backToString(){
	var string = "How are you doing today?";
	var lowerCasing = string.toLowerCase();
	var splitApart = lowerCasing.split(" ");
	var sorting = splitApart.sort();
	
		return sorting.toString();
}
console.log(backToString());

//number 9

var backwardArray = ['Here is a loop'];

if (var string = 0; string <= backwardArray; string ++){
	console.log(string.)
}