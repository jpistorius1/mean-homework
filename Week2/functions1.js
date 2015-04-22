//number 1

function twoNumbers(num1, num2){
	return num1 + num2;
}
var sum = twoNumbers(5,6);

console.log(sum);

//number 2

function threeNumbers(num1, num2, num3){
	var largestNumber = num1;
	if (num2 > largestNumber){
		largestNumber = num2;
	}
	if (num3 > largestNumber){
		largestNumber = num3;
	}
	return largestNumber;
}

var tiny = threeNumbers(3, 8, 1);

	console.log(tiny);

//number 3

function evenOdd(num1){
	if (num1 % 2 === 0){
		return 'Even';
	} else {
		return 'Odd';
	}
}

var number = evenOdd(8);
console.log(number);

//number 4

function howLong(x){
	var sentence = x.length;
	var partialSentece = x.substring(0, sentence / 2);
	if(sentence <= 20){
		return x + x;
	} else {
		return partialSentece;
	}
}
var stuff = howLong('test test test test test');
console.log(stuff);

//number 5

function fibonacci(numberTo){
	for (startingPoint = 0, secondPoint = 1, thirdPoint = 0; thirdPoint < numberTo; startingPoint = secondPoint, secondPoint = x, thirdPoint ++){
		x = startingPoint + secondPoint;
			console.log(x);
	}
};

fibonacci(10);

// number 6

var a = 2;
var b = 3;
var c = 4;

function quadraticEquation(){
var array = [];
var divisor = (b * b) - (4 * a * c);
var negativity = (divisor >= 0);
var product = 1;
if (negativity == true){product = -1}
	var plusQuad = ((b * -1) + (Math.sqrt(Math.abs(divisor)) * product)) / 2 * a;
	var minusQuad = ((b * -1) - (Math.sqrt(Math.abs(divisor)) * product)) / 2 * a;

	array.push(plusQuad);
	array.push(minusQuad);

	return array;
}
console.log(quadraticEquation());

// number 7

