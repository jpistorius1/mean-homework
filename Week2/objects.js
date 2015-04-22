// number 1

var newDataPieces = function(addName, addStreet, addCity, addZip) {
this.name = addName;
this.street = addStreet;
this.city = addCity;
zip = addZip; 
};

var customerInformation = new newDataPieces('John', '123 anywhere st', 'Sandy', '84020');
console.log(customerInformation);

// number 2

var peanuts = {
 name: 'Charlie Brown',
 type: 'blockhead',
 enemy: 'Kicking the football',
 
};

var enemyIs = peanuts.enemy;
console.log(enemyIs);

// number 3

var numberObject = {
type: 'cat',
color: 'blue',
};

numeric_keys(numberObject);
console.log(numberObject);

function numeric_keys(original){
  var count = 0;
    for (var key in original){
      count++;
      original[count] = original[key];
      delete original[key];
    }
    return numeric_keys;
}

// number 4

//var tournamentResults = function(name, place){
// 	this.name = name,
// 	this.place = place,
// };

// var tournamentTimes = new tournamentResults (
//    'Aaron', 3;
//     'Jaquelin', 4;
//     'Denise', 7.6;
//     'Blake:', 3.01;
//     'O\'Shaughnessy', undefined;
//     'Timothy', 11;
// )
// console.log tournamentResults();