var Letter = require('./letter.js');

function Word(word) {
	this.letters = word.split().map((letter) => new Letter(letter));
	this.getWord = function() {
		return this.letters.map((letterObj) => letterObj.getLetter()).join();
	}
	this.checkCorrect = function(guess) {
		return this.letters.forEach((letterObj) => letterObj.setGuessed(guess)).reduce((b1, b2) => b1 || b2);
	}
}

module.exports = Word;
