let rock = document.form1.rockBtn;
let paper = document.form1.paperBtn;
let scissor = document.form1.scissorBtn;
let playAgain = document.form1.playAgainBtn;
let displayResult = document.querySelector(".displayResult");
let playerChoice = document.querySelector(".playerChoice");
let cpuChoice = document.querySelector(".cpuChoice");
let turnPlayed = document.querySelector(".turnPlayed");
let playerScore = document.querySelector(".playerScore");
let cpuScore = document.querySelector(".cpuScore");
let finalResult = document.querySelector(".finalResult");

let gamePlayed = 0;
let playerCount = 0;
let computerCount = 0;

turnPlayed.textContent = "Game Played: " + gamePlayed;
playerScore.textContent = "Player Win: " + playerCount
cpuScore.textContent = "CPU Win: " + playerCount

rock.addEventListener("click", playerSelectionRock);
paper.addEventListener("click", playerSelectionPaper);
scissor.addEventListener("click", playerSelectionScissor);

let computerSelection;
let playRock = rock.value;
let playPaper = paper.value;
let playScissor = scissor.value;

function computerPlay(){ 
let computerSelectionArray = ["rock", "paper", "scissor"];
let randomNum = parseInt((Math.random()*computerSelectionArray.length));
 computerSelection = computerSelectionArray[randomNum];
  return computerSelection;
}
computerPlay();


function playerSelectionRock(){
  computerPlay();
  if(playRock == "rock" && computerSelection == "rock"){
    gamePlayed++;
    displayResult.textContent = "Draw!!!";
    displayResult.style.color = "blue";
    cpuChoice.textContent = "CPU Choose: Rock";
    playerChoice.textContent = "Player Choose: " + playRock;
    turnPlayed.textContent = "Games Played:" + gamePlayed ; 
  }
  else if(playRock == "rock" && computerSelection == "paper"){
    computerCount++;
    gamePlayed++;
    displayResult.textContent = "You Lose! Paper Beat Rock";
    displayResult.style.color = "red";
    cpuChoice.textContent = "CPU Choose: Paper";
    playerChoice.textContent = "Player Choose: " + playRock;
    turnPlayed.textContent = "Games Played:" + gamePlayed ; 
    cpuScore.textContent = "CPU Win : " + computerCount;
  }
  else if(playRock == "rock" && computerSelection == "scissor"){
    playerCount++;
    gamePlayed++;
    displayResult.textContent = "You Win! Rock beat Scissor";
    displayResult.style.color = "green";
    turnPlayed.textContent = "Games Played: " + gamePlayed;
    playerScore.textContent = "Player Win: " + playerCount;
    cpuChoice.textContent = "CPU  Choose: Scissor";
    playerChoice.textContent = "Player Choose: " + playRock;
  }
  game();
}
// play paper for player
function playerSelectionPaper(){
  computerPlay();
  if(playPaper == "paper" && computerSelection == "rock"){
    playerCount++;
    gamePlayed++;
    displayResult.textContent = "You Win! Paper beat Rock";
    displayResult.style.color = "green";
    turnPlayed.textContent = "Games Played: " + gamePlayed;
    playerScore.textContent = "Player Win: " + playerCount;
    cpuChoice.textContent = "CPU  Choose: Rock";
    playerChoice.textContent = "Player Choose: " + playPaper;
  }
  else if(playPaper == "paper" && computerSelection == "paper"){
    gamePlayed++;
    displayResult.textContent = "Draw!!!";
    displayResult.style.color = "blue";
    cpuChoice.textContent = "CPU Choose: Paper";
    playerChoice.textContent = "Player Choose: " + playPaper;
    turnPlayed.textContent = "Games Played:" + gamePlayed ; 
  }
  else if(playPaper == "paper" && computerSelection == "scissor"){
    computerCount++;
    gamePlayed++;
    displayResult.textContent = "You Lose! Scissor Beat Paper";
    displayResult.style.color = "red";
    cpuChoice.textContent = "CPU Choose: Scissor";
    playerChoice.textContent = "Player Choose: " + playPaper;
    turnPlayed.textContent = "Games Played:" + gamePlayed ; 
    cpuScore.textContent = "CPU Win : " + computerCount;
  }
  game();
}

// play scissor for player
function playerSelectionScissor(){
  computerPlay();
  if(playScissor == "scissor" && computerSelection == "rock"){
    computerCount++;
    gamePlayed++;
    displayResult.textContent = "You Lose! Rock Beat Scissor";
    displayResult.style.color = "red";
    cpuChoice.textContent = "CPU Choose: Rock";
    playerChoice.textContent = "Player Choose: " + playScissor;
    turnPlayed.textContent = "Games Played:" + gamePlayed ; 
    cpuScore.textContent = "CPU Win : " + computerCount;
  }
  else if(playScissor == "scissor" && computerSelection == 'paper'){
    playerCount++;
    gamePlayed++;
    displayResult.textContent = "You Win! Scissor beat Paper";
    displayResult.style.color = "green";
    turnPlayed.textContent = "Games Played: " + gamePlayed;
    playerScore.textContent = "Player Win: " + playerCount;
    cpuChoice.textContent = "CPU  Choose: Paper";
    playerChoice.textContent = "Player Choose: " + playScissor;
  }
  else if(playScissor == "scissor" && computerSelection == "scissor"){
    gamePlayed++;
    displayResult.textContent = "Draw!!!";
    displayResult.style.color = "blue";
    cpuChoice.textContent = "CPU Choose: Scissor";
    playerChoice.textContent = "Player Choose: " + playScissor;
    turnPlayed.textContent = "Games Played:" + gamePlayed; 
  }
  game();
}

function game(){
  if(playerCount == 5 && playerCount > computerCount){
    finalResult.textContent = "Player Won This Round Congratulations";
    finalResult.style.color = "green";
    playAgain.style.backgroundColor = "white";
    playAgain.disabled = false; 
    disableBtn();
  }
  else if(computerCount == 5 && computerCount > playerCount){
    finalResult.textContent = "You Lost This Round Play Again";
    finalResult.style.color = "red";
    playAgain.style.backgroundColor = "white";
    playAgain.disabled = false; 
    disableBtn();
  }
}

// disabled rock, paper, scissor, btn after player or cpu wins
function disableBtn(){
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
  rock.style.backgroundColor = "black"
  paper.style.backgroundColor = "black"
  scissor.style.backgroundColor = "black"
}

playAgain.disabled = true;
playAgain.style.backgroundColor = "black";

// play another round
function playAgainFunction(){
  playAgain.addEventListener("click", function(){
    location.reload();
  });
}
playAgainFunction();


