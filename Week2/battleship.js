//make grid
var grid = [];

var rows = 10;
var columns = 10;

function makeGrid(){

	for (var x = 0; x < rows; x++) {
		grid.push([]);
		for (var y = 0; y < columns; y++) {
			var space = {
				hit: false,
				ship: false
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
				symbol = "o";

			}
			lineArray.push(symbol);
		}
		console.log(lineArray);
	}
}



// set markers




// make ships

// take input and give outcome



makeGrid();
printGrid();