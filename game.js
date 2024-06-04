console.log("Hello! Ready to play a game? ")

//computerChoice - get with Math.random()
function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let compChoice;
    if (number === 0){
        compChoice = "rock";
    }
    else if (number === 1){
        compChoice = "paper";
    }
    else {
        compChoice = "scissors";
    }
    return compChoice;
}

//humanChoice - prompt input from user - function getHumanChoice
function getHumanChoice() {
    let humanChoice = prompt('Rock, paper or scissors? ');
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

//Declare players score variables humanScore and computerScore (initVal = 0)
let humanScore = 0;
let compScore = 0;

//Function playRound that takes humanChoice (parameter case insensitive) and computerChoice as arguments
//console.log the winner and result
function playRound(humanChoice, compChoice){
   if (humanChoice === compChoice){
    console.log(`It is a tie! Both players chose ${humanChoice}. `);
   }
   else if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "scissors" 
    && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock" ){
    console.log(`You win! ${humanChoice} beats ${compChoice}.`);
    //increment humanScore value if player wins
    humanScore++;
   }
   else {
    console.log(`You loose! ${compChoice} beats ${humanChoice}`);
    //increment compScore value if comp wins
    compScore++;
   }
}

//playGame function declared inside playGame to play five rounds

function playGame(){
    for (let i=1; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>compScore){
        console.log(`You win! ${humanScore} points against ${compScore}. `);
    }
    else if (compScore>humanScore) {
        console.log(`You loose! ${compScore} points against ${humanScore}. `);
    }
    else {
        console.log(`It is a tie! Both has ${humanScore} points. `);
    }
}


playGame();

