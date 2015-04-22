var name = 'jerry pistorius';
var letter = 'u';
var found = false;

for (var i = 0; i < name.length && found === false; i++){
	if (name[i] === letter){
	console.log('I found it: ' + i);
	found = true;
	}
		console.log(i);
}
if (!found) console.log('Not found');