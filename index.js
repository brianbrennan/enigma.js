var Enigma = require('./enigma');
var fs = require('fs');

var e = new Enigma({
	sequence: 'alphanumeric',
	rotorSettings: '99Taps',
	spaces: false
});

var m;

fs.readFile('in.txt', function(err, data){
	m = e.encrypt(data.toString());

	fs.writeFile('encrypted.ej', m, function(err){

		m = e.decrypt(m);

		fs.writeFile('out.txt', m, function(err){

		});

	});
});
