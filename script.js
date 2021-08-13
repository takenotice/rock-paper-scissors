let playerSelection;
let computerSelection;
let playerWins;
let computerWins;

console.log(game());

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

function playerPlay() {
    return window.prompt('Choose rock, paper or scissors');
}

function playRound(computerSelection, playerSelection) {
    
    if (computerSelection === playerSelection) { // check for tie
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
    playerWins = 0;  // reset win counters
    computerWins = 0;

    for (let i = 1; i <6; i++) {
        playerSelection = playerPlay()
        computerSelection = computerPlay();
        console.log(`Round ${i}`);
        console.log(`You: ${playerSelection} Vs. COM: ${computerSelection}...`);
        console.log(playRound(computerSelection, playerSelection));
        console.log('\n');
    }
    return playerWins > computerWins ? 'Nice! You are the RPS Champ!' : 'Too Bad! Better luck next time!'
}

function win() {
    playerWins++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function lose() {
    computerWins++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}


