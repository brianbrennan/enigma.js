//Settings
var rotorSettings = "WAADERISTGUT";
var sequence = 'ascii';
var atRotor = 0;

//Functions

function enigmate(s){
	var message = "";
	var saveSettings = rotorSettings;

	for(var i = 0; i < s.length; i++){
		step();

		var addChar = s[i];

		for(var j = 0; j < rotorSettings.length; j++){
			addChar = rotorize(addChar);
		}

		atRotor = 0;

		message = message + addChar;
	}

	rotorSettings = saveSettings;

	return message;
}

function rotorize(c){

	if(sequence == 'caps'){

		var givenCharCode = c.charCodeAt(0) - 65;
		var rotorCharCode = rotorSettings.charCodeAt(atRotor) - 65;
		atRotor++;

		if(givenCharCode == -33)
			return ' ';

		var num = (givenCharCode + rotorCharCode + (26 * rotorSettings.length)) % 26 + 65;

		return String.fromCharCode(num);
	} else if (sequence == 'ascii') {
		var givenCharCode = c.charCodeAt(0) - 32;
		var rotorCharCode = rotorSettings.charCodeAt(atRotor) - 32;
		atRotor++;

		if(givenCharCode == 0)
			return ' ';

		var num = (givenCharCode + rotorCharCode + (93 * rotorSettings.length)) % 93 + 32;

		return String.fromCharCode(num);
	}
}

function step(){
	var newSettings = "";
	for(var i = 0; i < rotorSettings.length; i++){
		newSettings = newSettings + String.fromCharCode(rotorSettings.charCodeAt(i) + 1);
	}

	rotorSettings = newSettings;
}

function decrypt(s){
	var message = "";
	var saveSettings = rotorSettings;
	atRotor = rotorSettings.length - 1;

	for(var i = 0; i < s.length; i++){//get to point that rotor settings should be
		step();
	}

	for(var i = s.length - 1; i >= 0; i--){
		var addChar = s[i];

		for(var j = rotorSettings.length - 1; j >= 0; j--){
			addChar = deRotorize(addChar);
		}
		atRotor = rotorSettings.length - 1;
		deStep();

		message = addChar + message;
	}

	rotorSettings = saveSettings;

	return message;
}

function deRotorize(c){
	if(sequence == 'caps'){
		var givenCharCode = c.charCodeAt(0) - 65;
		var rotorCharCode = rotorSettings.charCodeAt(atRotor) - 65;

		if(givenCharCode == -33)
			return ' ';
		atRotor--;

		var num = (givenCharCode - rotorCharCode + (26 * rotorSettings.length)) % 26 + 65;

		return String.fromCharCode(num);
	} else if (sequence == 'ascii') {
		var givenCharCode = c.charCodeAt(0) - 32;
		var rotorCharCode = rotorSettings.charCodeAt(atRotor) - 32;

		if(givenCharCode == 0)
			return ' ';
		atRotor--;

		var num = (givenCharCode - rotorCharCode + (93 * rotorSettings.length)) % 93 + 32;

		return String.fromCharCode(num);
	}
}

function deStep(){
	var newSettings = "";
	for(var i = 0; i < rotorSettings.length; i++){
		newSettings = newSettings + String.fromCharCode(rotorSettings.charCodeAt(i) - 1);
	}

	rotorSettings = newSettings;
}

console.log(enigmate('I walked in just the other day, and I wan\'ted to see my friend. Let\'s see if this works'));

console.log(decrypt('; $ 1<BM j  2IS` xx$ FWW`y &/So _xz w `Vo40-8  g &$0    m(  HJ  V{9UP hfr 1: ``m& BFUZ'))


