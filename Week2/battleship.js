//make grid
var ask = require('readline-sync');
var grid = [];
var battleship = 3;
var shipsToSink = 3;
var rows = 10;
var columns = 10

gameStart();

function gameStart(){
	makeGrid();
	 while (shipsToSink > 0){
			printGrid();
			userCoordinates();
	}
}

function makeGrid(){

	for (var x = 0; x < rows; x++) {
		grid.push([]);
		for (var y = 0; y < columns; y++) {
			var space = {
				hit: false,
				ship: shipPlacement()
			};
			grid[x].push(space);
		}
    } 
} 


// print grid

function printGrid(){
	for (var x = 0; x < grid.length; x++) {
		var lineArray = [];
		for (var y = 0; y < grid[x].length; y++) {
			var symbol;
			var space = grid[x][y];
			if(space['hit'] == true){
				if (space['ship'] == true){
					symbol = "X";
				} else {
					symbol = "M";
				}
			} else {
				symbol = "~";
			}
			lineArray.push(symbol);
		}
		console.log(lineArray);
	}
}

// make ships

function shipPlacement(){
	(battleship > 3);
	if (battleship > 0){
		if((Math.floor(Math.random() * 5) == 4)){
			battleship --;
			return true;
		}
	}

	return false;

}


// take input and give outcome

function userCoordinates(){
	var coordinateX = ask.question("Input coordinate of X: 0-9 ");
	var coordinateY = ask.question("Input coordinate of Y: 0-9 ");
	var shotResult = checkSpaces(coordinateX, coordinateY);
	updateSpace(coordinateX, coordinateY);

	if(shotResult == true){
		console.log("You've hit a ship! ");
		shipsToSink --;
	} else {
		console.log("Miss. Try again. ");
	}
}

function checkSpaces(x, y){
	var shotResult = grid[x][y]['ship'];
	return shotResult; 
} 


function updateSpace(x, y, result){
	var space = grid[x][y];
	
	space['hit'] = true;
}
