var inquirer = require('inquirer');
var Word = require('./word.js');
const randomWord = require('random-word');

const tries = 26;
const word = randomWord();
const wordObj = new Word(word);
var guessed = [];
var yourTries = 0;

function play() {
	console.log(wordObj.getWord().split('').join(' '));
	if (tries <= 0) {
		console.log('Sorry you lost! The word is ' + word);
	}
	else if (wordObj.getWord() === word) {
		console.log('Congratulations you won!');
		console.log(`It took you ${yourTries} tries.`);
	}
	else {
		letterEnter();
				
	}
}

function letterEnter() {
	inquirer.prompt([
		{
			name: 'char',
			type: 'input',
			message: `Guess a letter.`,
		}
	]).then(response => {
		yourTries++;
		if (!validateChar(response.char)) {
			console.log('Please enter a single letter of the alphabet.');
			return letterEnter();
		}
		else {
			response.char = response.char.toLowerCase();
			if (guessed.includes(response.char)) {
				console.log('Letter already guessed.');
			} 
			else {
				guessed.push(response.char);
				var correct = wordObj.checkCorrect(response.char);
				(correct) ? console.log('Correct!') : console.log('Nope.');
			}
			play();
		}
	});
}

function validateChar(input) {
	var regex = new RegExp('^[a-z]$');
	return input.toLowerCase().match(regex);
}

play();
