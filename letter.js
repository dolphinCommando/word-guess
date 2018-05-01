
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
		} 
		else {
			this.guessed = false;
		}
	}
}

module.exports = Letter;