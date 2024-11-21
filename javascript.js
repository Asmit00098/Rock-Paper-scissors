let userScore=0,cpuScore=0;
function getComputerChoice()
{
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
function setImageUser(userChoice)
{   const userImage=document.querySelector("#userChoice");
    if(userChoice==="rock")
    {userImage.src="Links_and _images/rock_player.jpg";
        
    }
    else if(userChoice==="paper")
    {
        userImage.src="Links_and _images/paper_player.jpg";
    }
    else
    {
        userImage.src="Links_and _images/scissors_player.jpg";
    }
}
function setImageComputer(computerChoice)
{
    if(computerChoice==="rock")
    {
        document.querySelector("#computerChoice").src="Links_and _images/rock_cpu.jpg";
        
    }
    else if(computerChoice==="paper")
    {
        document.querySelector("#computerChoice").src="Links_and _images/paper_cpu.jpg";
    }
    else
    {
        document.querySelector("#computerChoice").src="Links_and _images/scissors_cpu.jpg";
    }
}
function playgame(a){
    let userChoice = a;
    let computerChoice = getComputerChoice();
    


console.log(userChoice+" "+computerChoice);
    setImageUser(userChoice);
    setImageComputer(computerChoice);
    let result_text='';
    if((userChoice==="rock"&&computerChoice==='scissors')||(userChoice==='paper'&&computerChoice==='rock')||(userChoice==='paper'&&computerChoice==='rock'))
    {
        result_text="You Win!"
        userScore++;
    }
    else  if(userChoice===computerChoice)
    {
        result_text="It's a Tie"
    }
    else{
        result_text="Opponent Wins!";
        cpuScore++;
    }
    
        result=document.createElement("p");
        result.textContent=result_text;
        const score=document.querySelector(".Score");
        score.innerHTML="Current score: <br>"+"Player: "+userScore+"<br>Opponent: "+cpuScore+"<br>";
        score.appendChild(result);
        if(userScore==5)
            {
                console.log(userScore);
                const score=document.querySelector(".Score");
                score.innerHTML="You Win This Round!";
                userScore=0;
                cpuScore=0;
            }
        if(cpuScore==5)
            {
                const score=document.querySelector(".Score");
                score.innerHTML="Opponent Wins This Round!";
                userScore=0;
                cpuScore=0;
            }
        
       

}

const rock=document.querySelector("#Rock");
const paper=document.querySelector("#Paper");
const scissors=document.querySelector("#Scissors");
rock.addEventListener("click",function(){playgame("rock")});
paper.addEventListener("click",function(){playgame("paper")});
scissors.addEventListener("click",function(){playgame("scissors")});


