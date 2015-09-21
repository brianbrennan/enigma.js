function Enigma(i, s){

	if(typeof i === 'string'){
		this.rotorSettings = i;

		if(typeof s === 'string')
			this.sequence = s;
		else
			this.sequence = 'ascii';
		this.atRotor = 0;
	} else if(typeof i === 'object'){
		if(typeof i.rotorSettings === 'string')
			this.rotorSettings = i.rotorSettings;
		if(typeof i.sequence === 'string')
			this.sequence = i.sequence;
		this.atRotor = 0;
	} else if(typeof i === 'undefined'){
		this.rotorSettings = 'ENIGMA';
		this.sequence = 'ascii';
		this.atRotor = 0;
	}
}

Enigma.prototype = {
	encrypt: function(s){
		var message = "";
		var saveSettings = this.rotorSettings;

		for(var i = 0; i < s.length; i++){
			this.step();

			var addChar = s[i];

			for(var j = 0; j < this.rotorSettings.length; j++){
				addChar = this.rotorize(addChar);
			}

			this.atRotor = 0;

			message = message + addChar;
		}

		this.rotorSettings = saveSettings;

		return message;
	},
	rotorize: function(c){
		if(this.sequence === 'caps'){

			var givenCharCode = c.charCodeAt(0) - 65;
			var rotorCharCode = this.rotorSettings.charCodeAt(this.atRotor) - 65;
			this.atRotor++;

			if(givenCharCode == -33)
				return ' ';

			var num = (givenCharCode + rotorCharCode + (26 * this.rotorSettings.length)) % 26 + 65;

			return String.fromCharCode(num);
		} else if (this.sequence == 'ascii') {
			var givenCharCode = c.charCodeAt(0) - 32;
			var rotorCharCode = this.rotorSettings.charCodeAt(this.atRotor) - 32;
			this.atRotor++;

			var num = (givenCharCode + rotorCharCode + (93 * this.rotorSettings.length)) % 93 + 32;

			return String.fromCharCode(num);
		}
	},
	step: function(){
		var newSettings = "";
		for(var i = 0; i < this.rotorSettings.length; i++){
			newSettings = newSettings + String.fromCharCode(this.rotorSettings.charCodeAt(i) + 1);
		}

		this.rotorSettings = newSettings;
	},
	decrypt: function(s){
		var message = "";
		var saveSettings = this.rotorSettings;
		this.atRotor = this.rotorSettings.length - 1;

		//get to point that rotor settings should be
		for(var i = 0; i < s.length; i++){
			this.step();
		}

		for(var i = s.length - 1; i >= 0; i--){
			var addChar = s[i];

			for(var j = this.rotorSettings.length - 1; j >= 0; j--){
				addChar = this.deRotorize(addChar);
			}
			this.atRotor = this.rotorSettings.length - 1;
			this.deStep();

			message = addChar + message;
		}

		this.rotorSettings = saveSettings;

		return message;
	},
	deRotorize: function(c){
		if(this.sequence == 'caps'){
			var givenCharCode = c.charCodeAt(0) - 65;
			var rotorCharCode = this.rotorSettings.charCodeAt(this.atRotor) - 65;

			if(givenCharCode == -33)
				return ' ';
			this.atRotor--;

			var num = (givenCharCode - rotorCharCode + (26 * this.rotorSettings.length)) % 26 + 65;

			return String.fromCharCode(num);
		} else if (this.sequence == 'ascii') {
			var givenCharCode = c.charCodeAt(0) - 32;
			var rotorCharCode = this.rotorSettings.charCodeAt(this.atRotor) - 32;

			this.atRotor--;

			var num = (givenCharCode - rotorCharCode + (93 * this.rotorSettings.length)) % 93 + 32;

			return String.fromCharCode(num);
		}
	},
	deStep: function(){
		var newSettings = "";
		for(var i = 0; i < this.rotorSettings.length; i++){
			newSettings = newSettings + String.fromCharCode(this.rotorSettings.charCodeAt(i) - 1);
		}

		this.rotorSettings = newSettings;
	}
};

var e = new Enigma({
	rotorSettings: 'AUD',
	sequence: 'ascii'
});

var encrypted = e.encrypt('Welcome to the Jungle My friend');

console.log(encrypted);

console.log(e.decrypt(encrypted));