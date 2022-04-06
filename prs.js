
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
let roundResult = '';
let numRounds = 5;
const selectorWrapper = document.querySelector('#selectorWrapper');

selectorWrapper.addEventListener('click',clicked);

function clicked(e){
    if(e.target !== e.currentTarget){
        var clickedButton = e.target.id;
        playerChoice = clickedButton;
        playRound(playerChoice);
    }
}

function computerPlay(){
    let selector = Math.floor(Math.random() * 3);

    if (selector < 1){
        return "rock";
    }
    else if (selector > 1) {
        return "paper";
    }
    else{
        return "scissor";
    }
}
function gameOver(){
    if(playerScore == 5){
        alert('The Player Wins!')
        reset();
    } else if (computerScore == 5){
        alert('The Computer Wins')
        reset();
    }
}
function reset(){
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerChoice,computerChoice){
    computerChoice = computerPlay();
    const playerScoreboard = document.getElementById('playerScore');
    const computerScoreboard = document.getElementById('computerScore');
    const resultOutput = document.getElementById('roundResult');

    if(playerChoice === computerChoice){
        roundResult = 'This round is a draw.';
    } else if (
        (playerChoice == 'rock' && computerChoice == 'paper') ||
        (playerChoice == 'scissor' && computerChoice == 'rock') ||
        (playerChoice == 'paper' && computerChoice == 'scissor')) {
        computerScore++;
        roundResult = 'Computer Wins';
    } else if (
        (playerChoice == 'rock' && computerChoice == 'scissor') ||
        (playerChoice == 'scissor' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) {
        playerScore++;
        roundResult = 'Player Wins';
    }
    resultOutput.textContent = roundResult;
    playerScoreboard.textContent = `Player Score: ${playerScore}`;
    computerScoreboard.textContent = `Computer Score: ${computerScore}`;
    gameOver();
}
/*
function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerChoice,computerChoice);
        console.log(roundResult);
        console.log('Player: ' + playerScore)
        console.log('Computer: ' + computerScore)
        console.log('round:' + i);
    }
}


        game();
*/