
function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
	this.getLetter = function() {
		if (this.guessed) {
		  return this.letter;
		}
		else return '_';
	}
	this.setGuessed = function(guess) {
		if (guess===this.letter) {
			this.guessed = true;
			return true;
		} else return false;
	}
}
/*
char = new Letter('a');
char.setGuessed('b');
console.log(char.getLetter());
*/

module.exports = Letter;