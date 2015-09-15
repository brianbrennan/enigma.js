//settings

var sequence = 'ascii'; // 'capAlpha', 'alpha', 'alphaNumeric', 'ascii'
var rotorSettings = 'boom';
var plugSettings = ['ZT','HE'];

//functions

function enigmate(s){
	if(typeof s !== 'string')
		return 'Must send a string';

	var message = "";

	for(var i = 0; i < s.length; i++){
		var r = s.charAt(i);
		for(var j = 0; j < rotorSettings.length; j++){
			r = rotorize(r);
		}
		r = plugify(r);
		atRotor = 0;
		message = message + r;
	}

	return message;
}

var atRotor = 0;

function rotorize(c){//provides functionality of a single rotor 
	if(typeof c !== 'string')
		return 'Must send a string';
	if(c.length > 1){
		return 'Must only send one letter at a time';
	}
	if(sequence === 'capAlpha'){

		
	} else if(sequence === 'alpha'){

		
	} else if(sequence === 'ascii'){
		var n = rotorSettings[atRotor].charCodeAt(0);
		atRotor++;
		var k = c.charCodeAt(0);

		return String.fromCharCode((k + n) % 256);
	}
}//end of rotorize

function plugify(c){
	for(var i = 0; i < plugSettings.length; i++){
		if(plugSettings[i].charAt(0) === plugSettings[i].charAt(1))
			return 'Plug must go into a different letter';
		if(c == plugSettings[i].charAt(0))
			return plugSettings[i].charAt(1);
	}

	return c;
}//end of plugify



console.log(enigmate('Hey, how ya doing'));