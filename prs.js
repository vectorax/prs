
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;
let roundResult = '';
let numRounds = 5;

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

function playRound(playerChoice,computerChoice){
    computerChoice = computerPlay();
    playerChoice = prompt("Type Paper Rock or Scissor");
    console.log('computer played: ' + computerChoice);

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

}

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
