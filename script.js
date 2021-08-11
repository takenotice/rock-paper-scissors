console.log('Hello World!')

function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    if (rand < 1) {
        return 'rock';
    } else if (rand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection !== ('rock' || 'paper' || 'scissors')) { // check for valid input
        return 'Invalid Selection.'
    } else if (computerSelection === playerSelection) { // check for tie
        return "It's a tie!";
    } else if (computerSelection === 'rock') {
        return playerSelection === 'paper' ? win() : lose();
    } else if (computerSelection === 'paper') {
        return playerSelection === 'scissors' ? win() : lose();
    } else if (computerSelection === 'scissors') {
        return playerSelection === 'rock' ? win() : lose();
    }
}

function game() {
    getPlayerSelection();
    computerPlay();
    console.log(playRound(computerSelection, playerSelection));
}

function getPlayerSelection() {
const playerSelection = window.prompt('Choose rock, paper or scissors');
}

function win() {
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function lose() {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}


