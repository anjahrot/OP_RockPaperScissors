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
       result.textContent = `It is a tie! Both players chose ${humanChoice}. `
      }
      else if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "scissors" 
        && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock" ){
        result.textContent = `You win! ${humanChoice} beats ${compChoice}.`;
        //increment humanScore value if player wins
        humanScore++;
      }
      else {
        result.textContent = `You loose! ${compChoice} beats ${humanChoice}`;
        //increment compScore value if comp wins
        compScore++;
      }
   }

//Adding buttons for player to select choice
const btnRock = document.createElement("button");
btnRock.textContent = 'Rock';
const btnPaper = document.createElement("button");
btnPaper.textContent = 'Paper';
const btnScissors = document.createElement("button");
btnScissors.textContent = 'Scissors';

const buttons = document.querySelector('#btnSelectors');
buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);

//Addding heading
const heading = document.createElement("h1");
heading.textContent = "Hello! Ready to play a game? ";
document.body.insertBefore(heading, buttons);

//Adding div to display results
const result = document.createElement("div");
document.body.appendChild(result);

//Single-eventhandler to handle all click-events
document.addEventListener('click', (event) => {
    let text = event.target.textContent;
    let compSelection = getComputerChoice();
    let playerSelection;

    switch(text) {
        case 'Rock':
            playerSelection = text.toLowerCase();
            playRound(playerSelection,compSelection);
            break;
        case 'Paper':
            playerSelection = text.toLowerCase();
            playRound(playerSelection,compSelection);
            break;
        case 'Scissors':
            playerSelection = text.toLowerCase();
            playRound(playerSelection,compSelection);
            break;
    }
});







