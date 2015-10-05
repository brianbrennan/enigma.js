var Enigma = require('./enigma');
var fs = require('fs');

var e = new Enigma({
	sequence: 'ascii',
	rotorSettings: 'ae3',
	spaces: true
});

var m;

fs.readFile('in.txt', function(err, data){
	m = e.encrypt(data.toString());

	fs.writeFile('encrypted.txt', m, function(err){

		m = e.decrypt(m);

		fs.writeFile('out.txt', m, function(err){

		});

	});
});
