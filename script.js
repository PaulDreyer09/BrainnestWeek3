//Valid selections players can choose for playing rock paper scissors
const SELECTIONS = ['rock', 'paper', 'scissors'];

//Valid result string values for round outcomes
const RESULT_TYPES = {
    win: 'Win',
    lose: 'Lose',
    draw: 'Draw'
}

/**
 * Request the player to type in their hand to throw and returns the string.
 * The string gets formatted to lowercase and verified to the valid selections
 * to test the input the player provided according to the valid selections.
 * @returns {string} returns the string value of what the player typed in.
 */
const playerPlay = () => {
    let player_selection = ''
    while (true) {
        const player_input = prompt('You have to pick rock, paper or scissors');
        if (SELECTIONS.includes(player_selection)) {
            alert('You chose ${player_selection}');
            break;
        } else {
            alert('Incorrect input, please choose one of the three given objects!');
        }
    }

    return player_selection;

}

/**
 * Computer chooses his hand to throw
 * This function generates a random selection for the computer and returns the string value of the selection
 * @returns {string} returns a random selection 
 */
const computerPlay = () => {

}

/**
 * Starts a round of rock paper scissor and returns the result string value
 * Player gets prompted for their input selection
 * Computer has its selection randomly generated
 * The result of the round gets calculated and the result returned as a string.
 * @returns {string} returns a valid result of the round as 'Win', 'Lose', or 'Draw'
 */
const playRound = () => {

}

/**
 * Starts the game with a provided number of rounds
 * Results of each round will be displayed on the screen as a message
 * Finally after each round the game will display your total win/lose/draw score
 * @param {number} number_of_rounds number of round the game will be
 */
const game = (number_of_rounds) => {

}

/**
 * Requests the user to provide the number of rounds for the game to play.
 * @returns {number} rounds number of round the game will be
 */
const getNumberOfRounds = () => {
    let number_of_rounds;
    while (true) {
        number_of_rounds = prompt('How many rounds would you like to play?')

        if (number_of_rounds <= 0 || isNaN(number_of_rounds)) {
            alert('Invalid number provided. \nPlease provide an integer number of at least 1.')
        }
        else {
            return number_of_rounds;
        }
    }
}

//Start game
let number_of_rounds = getNumberOfRounds();
game(number_of_rounds);
