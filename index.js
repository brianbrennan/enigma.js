var Enigma = require('./enigma');

var e = new Enigma('HI');

console.log(e.encrypt('HELLO THERE'));

console.log(e.decrypt('>=FHM VLKZO'));