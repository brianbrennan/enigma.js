//settings

var sequence = 'capAlpha'; // 'capAlpha', 'alpha', 'alphaNumeric', 'ascii'
var rotorSettings = 'WELCOME';
var plugSettings = ['SP','FE'];

//functions

function enigmate(s){
	try{
		if(typeof s !== 'string')
			throw new Error('Must be a string!');

		var message = "";

		for(var i = 0; i < s.length; i++){
			var r = s.charAt(i);
			for(var j = 0; j < rotorSettings.length; j++){
				r = rotorize(r);
			}
			atRotor = 0;
			r = plugify(r);
			message = message + r;
		}

		return message;

	} catch(e){
		console.log('Error: ' + e.message);
	}
}//end of enigmate

var atRotor = 0;

function rotorize(c){//provides functionality of a single rotor
	if(typeof c !== 'string')
		throw new Error('Must enter a single character string into rotorize!');
	if(c.length > 1)
		throw new Error('Must only enter one character!');
	if(sequence === 'capAlpha'){

		var k = c.charCodeAt(0);
		var n = rotorSettings.charCodeAt(atRotor);
		atRotor++;

		//ERROR HANDLING
		if(!(k >= 65 && k <= 90))
			throw new Error('Can only ROTORIZE capital letters when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your input to be only cap letters');
		if(!(n >= 65 && n <= 90))
			throw new Error('Can only use capital letters in Rotor Settings when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your Rotor Settings to be only cap letters');

		k = k - 65;
		n = n - 65;

		var out = String.fromCharCode((k + n) % 26 + 65);

		return out;

		//end of capAlpha
	}

}//end of rotorize

function plugify(c){
	if(typeof c !== 'string')
		throw new Error('Must enter a single character string into rotorize!');
	if(c.length > 1)
		throw new Error('Must only enter one character!');
	if(sequence === 'capAlpha'){

		var k = c.charCodeAt(0);

		if(!(k >= 65 && k <= 90))
			throw new Error('Can only PLUGIFY capital letters when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your input to be only cap letters');

		for(var i = 0; i < plugSettings.length; i++){
			var t = plugSettings[i].charAt(1);

			if(!(t.charCodeAt(0) >= 65 && t.charCodeAt(0) <= 90))
				throw new Error('Can only use capital letters in PLUG SETTINGS when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your plug settings to be only cap letters');
			if(t === plugSettings[i].charAt(0))
				throw new Error('Must use a different letter to connect to in PLUG SETTINGS');
			if(c === plugSettings[i].charAt(0)){
				return t;
			}
		}
	}
	return c;
}//end of plugify



console.log(enigmate("BOOM"));