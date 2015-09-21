var Enigma = require('./enigma');

var e = new Enigma({
	sequence: 'alphanumeric',
	rotorSettings: 'ae3'
});

console.log(e.decrypt('f1JLgC1tIJE0acUaq3CnE'));