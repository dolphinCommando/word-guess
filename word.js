var Letter = require('./letter.js');

function Word(word) {
	this.letters = word.split('').map((letter) => new Letter(letter));
	this.getWord = function() {
		return this.letters.reduce((accumulator, letter) => accumulator + letter.getLetter(), '');
	}
	this.checkCorrect = function(guess) {
		return this.letters.map((letterObj) => letterObj.setGuessed(guess)).reduce((b, b1) => b || b1, false);
	}
}

/*
let ono = new Word('onomatopoeia');

console.log(ono.getWord());
ono.checkCorrect('o');
ono.checkCorrect('p');
console.log(ono.checkCorrect('n'));
console.log(ono.checkCorrect('v'));

console.log(ono.getWord());
console.log(ono.letters);
*/

module.exports = Word;
