
//settings
var rotorSettings = "OEL";
var atRotor = rotorSettings.length - 1;


function deEnigmate(s){

	for(var i = 0; i < s.length; i++){
		step();
	}

	var message = "";

	for(var i = 0; i < s.length; i++){

		var r = s[i];

		deStep();

		for(var j = 0; j < rotorSettings.length; j++){
			r = deRotorize(r);
		}

		atRotor = rotorSettings.length - 1;

		message = message + r;

	}

	console.log(rotorSettings);

	return message;
}

function step(){

	var newSettings = "";

	for(var i = 0; i < rotorSettings.length; i++){

		var n = rotorSettings.charCodeAt(i);

		n = n - 65;
		var c = String.fromCharCode((n + i + 1) % 26 + 65);

		newSettings = newSettings + c;

	}

	rotorSettings = newSettings;

	return;

	//this is where the rotorSettings should be incrementally stepped

}

function deStep(){

	var newSettings = "";

	for(var i = 0; i < rotorSettings.length; i++){

		var n = rotorSettings.charCodeAt(i);

		n = n - 65;
		var c = String.fromCharCode(((n - i - 1) + 26) % 26 + 65);

		newSettings = newSettings + c;

	}

	rotorSettings = newSettings;

	return;

	//this is where the rotorSettings should be incrementally stepped
}

function deRotorize(c){
	//this is where the letter in the message should be passed through all other points

	var k = c.charCodeAt(0);
	var n = rotorSettings.charCodeAt(atRotor);
	atRotor--;



	k = k - 65;
	n = n - 65;
	var num = ((k - n) + 26) % 26 + 65;

	var out = String.fromCharCode(num);

	return out;
}



console.log(deEnigmate('VIS'));