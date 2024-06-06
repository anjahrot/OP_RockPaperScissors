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

//Declare players score variables humanScore and computerScore (initVal = 0)
let humanScore = 0;
let compScore = 0;

//Function playRound that takes humanChoice (parameter case insensitive) and computerChoice as arguments
//console.log the winner and result
function playRound(humanChoice, compChoice){
      if (humanScore === 5) gameResult.textContent = 'You win!'
      else if (compScore === 5) gameResult.textContent = 'Computer wins!'
      else if (humanChoice === compChoice){
       roundResult.textContent = `It is a tie! Both players chose ${humanChoice}. `
      }
      else if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "scissors" 
        && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock" ){
        roundResult.textContent = `You win! ${humanChoice} beats ${compChoice}.`;
        //increment humanScore value if player wins
        humanScore++;
        playerScore.textContent = `Points: ${humanScore} `;
      }
      else {
        roundResult.textContent = `You loose! ${compChoice} beats ${humanChoice}`;
        //increment compScore value if comp wins
        compScore++;
        computerScore.textContent = `Points: ${compScore} `;
      }
   }

//DOM - Adding buttons for player to select choice
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

//Add heading at the top of the page
const heading = document.createElement("h1");
heading.textContent = "Hello! Ready to play a game? ";
document.body.insertBefore(heading, buttons);

//Adding div to display results
const result = document.createElement("div");
const roundResult = document.createElement("h3");
const scores = document.createElement("ul");
const playerScore = document.createElement("li");
const computerScore = document.createElement("li");
const gameResult = document.createElement("h2");
result.appendChild(roundResult);
scores.appendChild(playerScore);
scores.appendChild(computerScore);
result.appendChild(scores);
result.appendChild(gameResult);
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







