// jQuery Listeners
$(function(){
	$('#make-guess').click(answerReview);

	$('.sad').hide(); 
	randomAssignment();
	countdownTimer();
});

function next(){
	randomAssignment();
	makeVisible();
	makeColored();
	resetTimer();
	$("#checkAnswer").val('');
}

function makeVisible(){
	for(var i = 1; i <= totalWrong; i++){
		$('#sad' + i).show(); 
	}
}

function makeColored(){
	for(var i = 1; i <= totalCorrect; i++){
		$('#ball' + i + ' img').attr('src', "assets/img/pokeball.png"); 
	}
}

var totalCorrect = 0;
var totalWrong = 0;
var timerIntervalId = 0;
var tempChoice = undefined;
var POKEMON = new Object();
POKEMON['arcanine'] = 'assets/img/arcanine.png';
POKEMON['charizard'] = 'assets/img/charizard.png';
POKEMON['gengar'] = 'assets/img/gengar.png';
POKEMON['gligar'] = 'assets/img/gligar.png';
POKEMON['houndour'] = 'assets/img/houndour.png';
POKEMON['jolteon'] = 'assets/img/jolteon.png';
POKEMON['jynx'] = 'assets/img/jynx.png';
POKEMON['litleo'] = 'assets/img/litleo.png';
POKEMON['magcargo'] = 'assets/img/magcargo.png';
POKEMON['mewtwo'] = 'assets/img/mewtwo.png';
POKEMON['milotic'] = 'assets/img/milotic.png';
POKEMON['mrmime'] = 'assets/img/mrmime.png';
POKEMON['muk'] = 'assets/img/muk.png';
POKEMON['sandshrew'] = 'assets/img/sandshrew.png';
POKEMON['scizor'] = 'assets/img/scizor.png';
POKEMON['scyther'] = 'assets/img/scyther.png';
POKEMON['snorlax'] = 'assets/img/snorlax.png';
POKEMON['tauros'] = 'assets/img/tauros.png';
POKEMON['torkoal'] = 'assets/img/torkoal.png';
POKEMON['tropius'] = 'assets/img/tropius.png';
POKEMON['tyranitar'] = 'assets/img/tyranitar.png';
POKEMON['zekrom'] = 'assets/img/zekrom.png';

var randomAssignment = function (){
	var keys = Object.keys(POKEMON);
	tempChoice = keys[Math.floor(Math.random() * (keys.length))];
	$("#randomPokemon").attr('src', POKEMON[tempChoice]);
}

var answerReview = function (){
	var triviaGuess = $("#checkAnswer").val();
	var answerLowerCase = $.trim(triviaGuess.toLowerCase());
	var currentTarget = $('#randomPokemon').attr('src');
	console.log(currentTarget);
	if(POKEMON[answerLowerCase] && currentTarget === POKEMON[answerLowerCase]) {

		answerRight(answerLowerCase);
	} else {
		answerWrong();
	}
}

function answerRight(answerLowerCase){
		//delete pokemon from array
		//manipulate photo
		//check for 5
	delete POKEMON[answerLowerCase];
	totalCorrect++;
	makeColored();
	if(totalCorrect === 5){
		winGame();
	} else {
		$('#correctsound')[0].play();
		next();
	}
}

function answerWrong(){
		//check for 3
		//manipulate life
	totalWrong++;
	makeVisible();
	if(totalWrong === 3){
		loseGame();
	} else {
		$('#wrongsound')[0].play();
		next();
	}
}

function countdownTimer(){
	timerIntervalId = setInterval(checkTime, 1000);
	//run timer
}

function resetTimer(){
	$('#timer').text(15);
}

function checkTime(){
	var currentTimer = parseInt($('#timer').text(), 10);
	currentTimer--;
	if(currentTimer === 0){
		answerWrong();
	} else {
		$('#timer').text(currentTimer);
	} console.log($('#timer').text())
}

function winGame(){
	clearInterval(timerIntervalId);
	$('#winningsound')[0].play();
	alert('Congratulations, you win!');
	//win sound
}

function loseGame(){
	clearInterval(timerIntervalId);
	$('#losingsound')[0].play();
	alert('You lose');
}