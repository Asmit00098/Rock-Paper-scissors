function getComputerChoice()
{
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors): ");
    return humanChoice.toLowerCase();
}

function playGame()
{
    let humanScore=0, computerScore=0;
    function playRound(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("Your choice: "+humanChoice+"\nOpponent choice: "+computerChoice);
        if (humanChoice === computerChoice)
            {  
                console.log("It's a tie");
            }
        else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice==='paper'&& computerChoice==='rock')||(humanChoice==='scissors'&& computerChoice==='paper'))
            {   
                console.log("You win this round!");
                humanScore++;
            }
        else
            {
                console.log("You lose this round!");
                computerScore++;
            }
    }
    for(let i=0;i<5;i++)
    {
        playRound();
        console.log("Current Score:\nYou : "+humanScore+"\nOpponent : "+computerScore);
    }
    if(humanScore>computerScore)
    {
        console.log("You win this game!");
    }
    else
    {
        console.log("You lose this game!");
    }
}
playGame();