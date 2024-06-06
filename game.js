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
      
        if (humanChoice === compChoice){
            roundResult.textContent = `It is a tie! Both players chose ${humanChoice}. `
            }
        else if (humanChoice === "rock" && compChoice === "scissors" || humanChoice === "scissors" 
            && compChoice === "paper" || humanChoice === "paper" && compChoice === "rock" ){
            roundResult.textContent = `You win! ${humanChoice} beats ${compChoice}.`;
            //increment humanScore value if player wins
            humanScore++;
            playerScore.textContent = `${humanScore} `;
            //end game if reached 5 points
            if(humanScore === 5) gameResult.textContent = 'You win!' ;
            }
        else {
            roundResult.textContent = `You loose! ${compChoice} beats ${humanChoice}`;
            //increment compScore value if comp wins
            compScore++;
            computerScore.textContent = `${compScore} `;

            if (compScore === 5) gameResult.textContent = 'Computer wins!' ;
            }
    
    }
//DOM - Adding buttons for player to select choice
const btnRock = document.createElement("button");
btnRock.textContent = 'Rock';
btnRock.style.cssText = 'backgroundColor: darkblue; padding: 10px 20px; border-radius: 5px; font-size: 20px;';  
const btnPaper = document.createElement("button");
btnPaper.textContent = 'Paper';
btnPaper.style.cssText = 'backgroundColor: darkblue; padding: 10px 20px; border-radius: 5px; font-size: 20px;';
const btnScissors = document.createElement("button");
btnScissors.textContent = 'Scissors';
btnScissors.style.cssText = 'backgroundColor: darkblue; padding: 10px 20px; border-radius: 5px; font-size: 20px;';

const buttons = document.querySelector('#btnSelectors');
buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);


//Adding DOM-elements to display results
const roundResult = document.querySelector("h3");
const playerScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const gameResult = document.querySelector("h2");

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







