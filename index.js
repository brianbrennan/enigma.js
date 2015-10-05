var Enigma = require('./enigma');
var fs = require('fs');

var e = new Enigma({
	sequence: 'ascii',
	rotorSettings: 'ae3',
	spaces: true
});

var m;

fs.readFile('in.png', function(err, data){
	m = e.encrypt(data.toString());

	fs.writeFile('encrypted.ej', m, function(err){

		m = e.decrypt(m);

		fs.writeFile('out.png', m, function(err){

		});

	});
});
