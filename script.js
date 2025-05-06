
const CHOICES = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomIndex]
}

function getComputerChoice() {
    return getRandomChoice();
}

function getHumanChoice() {
    userInput = prompt("Rock, Paper, or Scissors: ");
    return userInput;
}

function playRound() {
    console.log("-------New round!------")
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice().toLowerCase();

    console.log(`The computer chose: ${computerChoice}`);
    
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log("Rock ties with Rock. Draw!")
        return 0;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("Rock loses to paper, you lose!");
        return 1;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Rock beats scissors, you win!")
        return 2;
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log("Scissors ties with scissors. Draw!");
        return 0;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("Scissors loses to paper, you lose!");
        return 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Scissors beats paper, you win!");
        return 2;
    } else if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log("Paper ties with paper. Draw!");
        return 0;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("Paper loses to scissors, you lose!");
        return 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("Paper beats rock, you win!");
        return 2;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    numberOfGames = 5;

    for (let i = 0; i < numberOfGames; i ++) {
        result = playRound();
        if (result == 1) {
            computerScore++;
        } else if (result == 2) {
            humanScore++;
        }
        console.log(`Current Score:\n\tUser Score: ${humanScore}\n\tComputer Score: ${computerScore}`)
    }
}

playGame();