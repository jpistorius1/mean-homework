var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
var maxPlayers = 5;
var players = [];
var losersArray = [];

app.use(bodyParser.json());

 var Game = function () {
	this.id = uuid.v1;
	this.players = [];
	this.maxPlayers = undefined;

	this.responses = [];


}

var currentGame = new Game();

app.post('/join', function(request, response){
	if(currentGame.players.length === 0)
		currentGame.maxPlayers === parseInt(request.body.players);

	currentGame.players.push(request.body.id);
	console.log(currentGame.players);
	currentGame.responses.push(response);
	if(currentGame.players.length === currentGame.maxPlayers)  {
		console.log(currentGame.players.length);
		console.log(currentGame.maxPlayers);
			for( var i = 0; i < currentGame.responses.length; i++){
				currentGame.responses[i].send(currentGame.players); 
			}
	}

})



app.listen(8080);
console.log('Server is running on 8080')
