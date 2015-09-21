var Enigma = require('./index');


var e = new Enigma('HELLO');

console.log(e.encrypt('Welcome Friend'));

console.log(e.decrypt(e.encrypt('Welcome Friend')));