//Valid selections players can choose for playing rock paper scissors
const SELECTIONS = ['rock', 'paper', 'scissors'];

//Valid result string values for round outcomes
const RESULT_TYPES = {
    win: 'Win',
    lose: 'Lose',
    draw: 'Draw'
}

const formatString = (string_value) => {
    return string_value.toLocaleLowerCase();
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
        player_selection = formatString(player_input);
        //Check if cancel or escape was pressed
        if (player_input == null) {
            if (confirm("Do you want to end the game?")) {
                // user clicked "ok"
                return 'stop'
            } else {
                // user clicked "cancel"
                continue;
            }
        }

        //Fix: Needs to format player_input to lowercase as the selections and assign it to player_selection

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
 * Have put an alert in for hand played but can be removed if not required.
 */
const computerPlay = () => {
    const random_num = Math.floor(Math.random() * 3);
    const computer_choice = SELECTIONS[random_num];
    alert(`Computer played: ${computer_choice}`);
    return computer_choice;
}

/**
 * Starts a round of rock paper scissor and returns the result string value
 * Player gets prompted for their input selection
 * If player presses escape or cancel button during prompt (returning 'stop' from playerPlay) the game will request to stop
 * Computer has its selection randomly generated
 * The result of the round gets calculated and the result returned as a string.
 * @returns {string} returns a valid result of the round as 'Win', 'Lose', or 'Draw' 
 * returns 'stop' if player wants to stop the game by pressing esc or cancel button in the prompts * 
 */
const playRound = () => {
    let player_selection = playerPlay();
    if (player_selection === 'stop') {
        return 'stop';
    }

    let computer_selection = computerPlay();
    if (player_selection === computer_selection) {
        return RESULT_TYPES.draw;
    } else if (player_selection === 'rock') {
        if (computer_selection === "scissors") {
            return RESULT_TYPES.win;
        }
        else {
            return RESULT_TYPES.lose;
        }
    } else if (player_selection === 'paper') {
        if (computer_selection === "rock") {
            return RESULT_TYPES.win;
        }
        else {
            return RESULT_TYPES.lose;
        }
    } else if (player_selection === 'scissors') {
        if (computer_selection === "paper") {
            return RESULT_TYPES.win;
        }
        else {
            return RESULT_TYPES.lose;
        }
    }
}

/**
 * Starts the game with a provided number of rounds
 * Results of each round will be displayed on the screen as a message
 * Finally after each round the game will display your total win/lose/draw score
 * @param {number} number_of_rounds number of round the game will be
 */
const game = (number_of_rounds) => {

    //Add the following code to the top inside the for loop for the rounds to allow game to end when playRound returns 'stop'
    /**
    if(result === 'stop'){
        console.log('Game stopped by player');
        return;
    }
    */
}

/**
 * Requests the user to provide the number of rounds for the game to play.
 * @returns {number} rounds number of round the game will be
 */
const getNumberOfRounds = () => {
    let number_of_rounds;
    while (true) {
        number_of_rounds = prompt('How many rounds would you like to play?')
        //Check if cancel or escape was pressed to stop the game
        if (number_of_rounds == null) {
            if (window.confirm("Do you want to end the game?")) {
                // user clicked "ok"
                return 0;
            } else {
                // user clicked "cancel"
                continue;
            }
        }


        if (number_of_rounds <= 0 || isNaN(number_of_rounds)) {
            alert('Invalid number provided. \nPlease provide an integer number of at least 1.')
            continue;
        }
        else {
            return number_of_rounds;
        }
    }
}

/**
 * Handles the press event on the start button to get the number of rounds for the game and to start the game
 */
const handleStartButtonPress = () => {
    let player_input = getNumberOfRounds();
    if (player_input === 0) {
        console.log('Game stopped by player');
        return;
    }

    if (player_input && !isNaN(player_input)) {
        game(player_input);
    }
    else {
        alert('Something went wrong in selecting the number of rounds. Please press the start button again to try again.');
    }
}

document.querySelector('#start_button').addEventListener('click', handleStartButtonPress);
