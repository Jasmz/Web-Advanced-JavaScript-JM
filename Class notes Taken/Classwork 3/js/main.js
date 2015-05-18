//Buttons
var rockButton = $('.choice-rock'); /*finding an element is just with the $ sign this is JQuery!*/
var paperButton = $('.choice-paper');
var scissorsButton = $('.choice-scissors');

/*console.log(rockButton);*/  /*how to make a debug log*/

//Choices
var playerChoice = '';
var computerChoice = '';
var results = '';
var playerChoiceElement = $('.player-choice');
var computerChoiceElement = $('.computer-choice');
var resultsElement = $('.results-final');

//Score
var playerScore = 0;
var computerScore = 0;
var playerScoreElement = $('.score-player');
var computerScoreElement = $('.score-computer');


rockButton.on('click', function(){      //This is an event listener
playerChoice = 'rock';
makeComputerChoice();
playerChoiceElement.text(playerChoice);
computerChoiceElement.text(computerChoice);
findWinner();
});

paperButton.on('click', function(){
playerChoice = 'paper';
makeComputerChoice();
playerChoiceElement.text(playerChoice); //var.text will change whatever text is in there
computerChoiceElement.text(computerChoice);
findWinner();

});

scissorsButton.on('click', function(){
playerChoice = 'scissors';
makeComputerChoice();
playerChoiceElement.text(playerChoice);
computerChoiceElement.text(computerChoice);
findWinner();
});

function makeComputerChoice(){
	var randomNumber = Math.random();

	/*console.log(randomNumber + ' : ' + computerChoice);*/ // + is to add stuff to the console log or strings

	if (randomNumber <= 0.333){
		computerChoice = 'rock';
	}
	else if (randomNumber > 0.333 && randomNumber < 0.666 ){
		computerChoice = 'paper';
	}
	else if (randomNumber >= 0.666){
		computerChoice = 'scissors';
	}
}

function findWinner(){
	console.log(playerChoice + ' | ' + computerChoice);

	//tie
	if (playerChoice === computerChoice){ /*1 = assings value, 2 == compares 3 === compares and include the type of element it is*/
		console.log('tie');
		resultsElement.text('Tie!');

	}
    //player picks rock
	if (playerChoice === 'rock') {
		if (computerChoice === 'paper'){
			resultsElement.text('Computer Wins.');
			computerScore +=1;
		}
		else if (computerChoice === 'scissors'){
			resultsElement.text('Player Wins');
			playerScore += 1;
		}
	}
	 //player picks paper
	if (playerChoice === 'paper') {
		if (computerChoice === 'scissors'){
			resultsElement.text('Computer Wins.');
			computerScore +=1;
		}
		else if (computerChoice === 'rock'){
			resultsElement.text('Player Wins!');
			playerScore += 1;
		}
	}
 //player picks scissors
	if (playerChoice === 'scissors') {
		if (computerChoice === 'rock'){
			console.log('Computer Wins');
			resultsElement.text('Computer Wins.');
			computerScore +=1;
		}
		else if (computerChoice === 'paper'){
			console.log('Player Wins');
			resultsElement.text('Player Wins!');
			playerScore += 1;
		}
	}

}
















