//settings

var sequence = 'capAlpha'; // 'capAlpha', 'alpha', 'alphaNumeric', 'ascii'
var rotorSettings = 'ARDMQU';

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
		if(!(k >= 65 && k <= 90 || k == 32))
			throw new Error('Can only ROTORIZE capital letters when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your input to be only cap letters');
		if(!(n >= 65 && n <= 90))
			throw new Error('Can only use capital letters in Rotor Settings when SEQUENCE is set to "capAlpha"! \nEither change your SEQUENCE to the appropriate decyphering method, or change your Rotor Settings to be only cap letters');
		if(k == 32)
			return " ";

		k = k - 65;
		n = n - 65;

		var pos = (k + n) % 26;

		var out = crypt(pos);

		atRotor++;

		return out;

		//end of capAlpha
	}

}//end of rotorize

function crypt(n){
	var h = rotorSettings(atRotor);

	return h.fromCharCode(n + 65);
}



function deEnigmate(s){
	try{
		if(typeof s !== 'string')
			throw new Error('Must be a string!');

		var message = "";

		for(var i = 0; i < s.length; i++){

			var r = s.charAt(i);
			atRotor = rotorSettings.length - 1;
			
			for(var j = rotorSettings.length - 1; j >= 0; j--){
				r = deRotorize(r);
			}

			message = message + r;
		}

		return message;

	} catch(e){
		console.log('Error: ' + e.message);
	}
}//end of deEnigmate

function deRotorize(c){
	if(typeof c !== 'string')
		throw new Error('Must enter a single character string into deRotorize!');
	if(c.length > 1)
		throw new Error('Must only enter one character!');
	if(sequence === 'capAlpha'){

		if(c == ' ')
			return c;

		var k = c.charCodeAt(0);
		var n = rotorSettings.charCodeAt(atRotor);

		atRotor--;

		k = k - 65;
		n = n - 65;

		if(k - n > 0)
			return String.fromCharCode((k - n) % 26 + 65);
		else 
			return String.fromCharCode((k - n + 26) % 26 + 65);

		//end of capAlpha
	}
}//end of deRotorize

function deAlphCrypt(){
	
}

var message = "HI HOW ARE YOU";
console.log(enigmate(message));
console.log(deEnigmate(enigmate(message)));