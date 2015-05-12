// DEPENDENCIES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var uuid = require('uuid');
app.use(bodyParser.json());

// CLASSES
var Game = function () {
	this.id = uuid.v1();
	this.players = [];
	this.losers = [];
	this.min_players = 2;

	// Will be used when playing each round
	this.round = {
		round_id: uuid.v1(),
		game_id: ,
		user_choices: [],
		// R, P, S
		tally: [0,0,0],
		score_tally: [0,0,0],
		play_responses: [],
		player_names: []
	};
}


// GLOBAL VARS
var MAX_PLAYERS = 5;
var PORT = 7000;
var players = [];
var losers_array = [];
var new_game = new Game();
var join_responses = [];
var games = {};
var rounds = {};
games[new_game.id] = new_game;

// REQUESTS
// Part 1
app.post('/join', function(request, response){
	// player requests higher min than was saved previously, use new players min for this game
	if (request.body.min_players > new_game.min_players){
		new_game.min_players = request.body.min_players;
	}

	// add them to game's players
	new_game.players.push(request.body.name);

	// add their individual responses (what the server is going to send them) when we have met our min number of players
	join_responses.push(response);
	
	// triggers to start the current game
	if (new_game.players.length === new_game.min_players || new_game.players.length === new_game.maxPlayers){
		// sends the responses to each individual user
		for (var i = 0; i < join_responses.length; i++){
			join_responses[i].json(new_game); 
		}

		// reset in preperation for new game
		new_game = new Game();
		games[new_game.id] = new_game;
		join_responses = [];
	}
});

// Part 2
// GLOBAL VARS

app.post('/play', function(request, response){
	// They will have chosen rock, paper, scissors at this point.
	var game_id = request.body.game_id;
	var player_name = request.body.name;

	// svae the responses for later use
	var this_game = games[game_id];

	// var this_round = new Round(game_id);
	var this_round = this_game.round;
	var this_game_responses_array = this_round.play_responses;
	this_game_responses_array.push(response);

	this_round.player_names.push(player_name);

	var user_choices = this_round.user_choices;
	user_choices.push(request.body.choice);

	// If everyone has sent a choice
	if(this_game_responses_array.length === this_game.players.length){
		for(var i = 0; i < user_choices.length; i++){
			switch(user_choices[i]){
				case 'rock':
					this_round.tally[0]++;
					break;
				case 'paper':
					this_round.tally[1]++;
					break;
				case 'scissors':
					this_round.tally[2]++;
					break;
				default:
					break;
			}
		}

		// Rocks' score = # of scissors | Papers' score = # of rocks | Scissors' score = # of papers
		this_round.score_tally[this_round.tally[2],this_round.tally[0],this_round.tally[1]];

		// Get winning choice
		var winner_index = -1;
		for (var i = 0; i < 3; i++){
			if (this_round.score_tally[i] > winner_index){
				winner_index = this_round.score_tally[i];
			}
		}
		var choice_options = ['rock','paper','scissors'];
		var winning_choice = choice_options[winner_index];

		// Compare winning choice to player choices to see who won/lost
		for (var i = 0; i < user_choices.length; i++){
			if (user_choices[i] !== winning_choice){
				this_game.losers.push(this_round.player_names[i]);
			}
		}

		// Send the responses, winners get to play next round, losers can play a new game if the want
		for (var i = 0; i < this_game_responses_array.length; i++){
			var this_name = this_round.player_names[i];
			var is_loser = this_game.losers.indexOf(this_name);
			var this_response = this_game_responses_array[i];
			if (is_loser != -1){
				this_response.send("Sorry, you lost! is_loser = " + is_loser); 
			} else {
				this_response.send("Sorry, you won! is_loser = " + this_game); 
				//this_response.json(this_game);
			}
		}


	}
});

// Part 3 will be connecting this to the html


app.listen(PORT);
console.log('Server is running on ' + PORT);

/*games = {
    1467A91C19230: {
        id: 1467A91C19230,
        player_array:,
        losers_array:
    },
    51B1C19230AA: {
        id: 51B1C19230AA,
        player_array:,
        losers_array:
    }

}
*/