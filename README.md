# word-guess

**word-guess** is a Hangman-style game for your command line. It runs in Node JS. It uses the npm package random-word, which has a dictionary of over 270,000 words.

### Usage

Clone the word-guess repo or fork it. You need to install the npm packages _inquirer_ and _random-word_ if you haven't already. Then enter **node index.js** to start! Guess a single alphabetical letter at a time. 

### Further Information

letter.js exports the constructor Letter, which stores a letter and whether it has been guessed.

word.js imports Letter and exports the constructor Word. Word stores a word as an array of Letter objects. 
  getWord() returns a string with letters or an underscores depending on whether a letter has been guessed.
  checkCorrect() runs setGuessed() on all letter objects and returns whether or not the guessed letter was in the word. 

index.js imports Word and requires _inquirer_ and _random-word_. The rest of index.js is _inquirer_ prompts and game logic. 



