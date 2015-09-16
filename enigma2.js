
//settings
var rotorSettings = "OEMR";
var atRotor = 0;


function enigmate(s){

	//this is where the functionality of the parts should go

	var message = "";

	for(var i = 0; i < s.length; i++){

		step(); //this makes the polyalphabet;

		var r = s[i];

		for(var j = 0; j < rotorSettings.length; j++){
			r = rotorize(r);
		}

		atRotor = 0;

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
		var c = String.fromCharCode((n + Math.pow(i + 1, 2)) % 26 + 65);

		newSettings = newSettings + c;

	}

	rotorSettings = newSettings;

	console.log(rotorSettings);

	return;

	//this is where the rotorSettings should be incrementally stepped

}

function rotorize(c){

	//this is where the letter in the message should be passed through all other points

	var k = c.charCodeAt(0);
	var n = rotorSettings.charCodeAt(atRotor);
	atRotor++;

	//ERROR HANDLING
	if(!(k >= 65 && k <= 90 || k == 32))
		throw new Error('Can only ROTORIZE capital letters when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your input to be only cap letters');
	if(!(n >= 65 && n <= 90))
		throw new Error('Can only use capital letters in Rotor Settings when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your Rotor Settings to be only cap letters');
	if(k == 32)
		return " ";

	k = k - 65;
	n = n - 65;
	var num = (k + n) % 26 + 65;

	var out = String.fromCharCode(num);

	return out;

}

function deEnigmate(s){
	var message = "";

	for(var i = 0; i < s.length; i++){
		deStep();

		var r = s[i];

		for(var j = 0; j < rotorSettings.length; j++){
			r = rotorize(r);
		}

		atRotor = 0;

		message = message + r;
	}

	return message;
}

function deStep(){
	var newSettings = "";

	for(var i = 0; i < rotorSettings.length; i++){

		var n = rotorSettings.charCodeAt(i);

		n = n - 65;
		var c = String.fromCharCode((n + Math.pow(i + 1, 1/2)) % 26 + 65);

		newSettings = newSettings + c;

	}

	rotorSettings = newSettings;

	return;
}

function backStep(){

}

function deRotorize(){

}



console.log(enigmate('WELCOME TO THE JUNGLE BABY'));
console.log(deEnigmate(enigmate('WELCOME TO THE JUNGLE BABY')));