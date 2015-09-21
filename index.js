var Enigma = require('./enigma');

var e = new Enigma({
	sequence: 'ascii',
	rotorSettings: 'ae3',
	spaces: true
});

console.log(e.decrypt('*JTW]nh__oe#lrzt2+$0'));