import wordBank from './word-bank.js';
import prompt from 'readline-sync';

// Grab a random word from the word bank file
const randomWord = wordBank => wordBank[Math.floor(Math.random() * wordBank.length)];
let newWord = randomWord(wordBank).toLowerCase();

// Initialize variables
let guessedLetters = [];
let guesses = 0;
const maxTries = 6;
let replayGame = true;
let games = 1;
let wins = 0;

// Initialize game
const playGame = () => {
    console.log(`\nWelcome to a game of Hangman. Press control c to quit at any time.`);
    while (replayGame) {

        while (guesses < maxTries) { // Check for guesses
            displayHangman();
            console.log(`Word: ${currentWord()}`);
            let guess = prompt.question('\nGuess a letter: ').toLowerCase();

            if (guess.length === newWord.length || guess.length > 1) { // Guessed more than one letter or the length of the word
                console.log('\n\nPlease enter letters one at a time to guess the word.');
            } else if (!guess || !/[a-z]/.test(guess)) { // Empty guess or something other than a letter
                console.log('\nPlease enter a valid letter.');
            } else if (guessedLetters.includes(guess)) { // Guessed the same letter again
                console.log('\nYou already guessed that letter. Try a different letter.');
            } else {
                guessedLetters.push(guess);
                if (!newWord.includes(guess)) { // Guessed incorrectly
                    guesses++; // Increment guesses if incorrect
                    const remainingGuesses = maxTries - guesses;
                    console.log(guesses < maxTries ?
                        `\nYou have ${remainingGuesses} guesses remaining.` :
                        `\nGAME OVER! No more guesses remaining. The word was: ${newWord}`
                    );
                    if (guesses > maxTries) {
                        break; // End game
                    }
                }
                if (!currentWord().includes('_')) { // Guessed correctly
                    console.log(`\n\nYou guessed it! The word was: ${newWord}`);
                    wins++;
                    break;
                }            
            }
        }

        displayHangman();

        // Prompt replay of game
        let replayPrompt = prompt.keyInYNStrict(games === 1 ? `\nYou've won ${wins} out of ${games} game. Do you want to play again?` : `\nYou've won ${wins} out of ${games} games. Do you want to play again?`);
        if (replayPrompt) {
            // Reset variables
            guessedLetters = [];
            newWord = randomWord(wordBank).toLowerCase();
            guesses = 0;
            replayGame = true;
            games++; // Increment number of games played for each replay
        } else {
            console.log('\nFine, I don\'t want to play either!\n');
            process.exit(); // Exit
        }
    }
};

// Display current word with guessed letters, otherwise display underscore placeholder for letters not yet guessed
const currentWord = () => {
    let display = '';
    for (const letter of newWord) {
        if (guessedLetters.includes(letter)) {
            display += ` ${letter} `;
        } else {
            display += ' _ ';
        }
    }
    return display;
};

// Display hangman
const displayHangman = () => {
    const man = [
        `
        +---------+
        |         |
        |
        |
        |
        |
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |
        |
        |
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |         |
        |         |
        |
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |        \\|
        |         |    
        |
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |        \\|/
        |         |
        |
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |        \\|/
        |         |
        |        /
        |_______
        |______|
        `,
        `
        +---------+
        |         |
        |        (O)
        |        \\|/
        |         |
        |        / \\
        |_______
        |______|
        `,
    ];

    // Display hangman 
    console.log(man[guesses]);
    
};

// Play game
playGame();