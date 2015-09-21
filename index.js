var Enigma = require('./enigma');

var e = new Enigma({
	sequence: 'alphanumeric',
	rotorSettings: 'ae3',
	spaces: true
});

console.log(e.decrypt('f1JL29140POPKMgqldjz3jHLP'));