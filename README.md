# Hangman Game

This is a single player console version of the classic Hangman Game.

A word is chosen randomly from a word bank and displayed with an underscore '**_**' representing each letter of the word. For every incorrect guess, a part of the hangman is displayed.

## How To Install

### Download Files
On this page, click on the '**Code**' button and copy the URL displayed.
In Terminal or Command Line, locate the directory you want to download the files into and enter: **git clone PASTE-URL-HERE**

### Installation
This game requires Node.js to play.
- Enter '**npm install**' in the Terminal or Command Line.

## How To Play

### Commands
- '**node .**' begins the game
- '**Control**' '**C**' key ends the game

### Rules
- You must enter a single letter.
- Entering more than one letter, a number, or guessing the word isn't allowed.

### Begin Game
Begin the game by typing in '**node .**' and press enter.

This will prompt you to guess a letter. 

### End Game
The game ends when the word is correctly guessed or the hangman is complete with six incorrect guesses.

You can quit the game at any time by pressing the **control** and **C** keys on your keyboard at the same time.

### Play Again
After you have either guessed correctly or guessed incorrectly six times, you will be prompted to play again.

Enter '**y**' to play again or '**n**' to end the game.