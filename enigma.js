//settings

var sequence = 'capAlpha'; // 'capAlpha', 'alpha', 'alphaNumeric', 'ascii'
var rotorSettings = 'WELCOME';
var plugSettings = ['ZT','HE'];

//functions

function enigmate(s){
	try{
		if(typeof s !== 'string')
			throw new Error('Must be a string!');

		var message = "";

		for(var i = 0; i < s.length; i++){
			var r = s.charAt(i);
			r = rotorize(r);
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
	
}//end of plugify



console.log(enigmate("BOOM"));