/*
 Game function:
 - player must guess a number  between a min and max
 - player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if he loses
 - let the player choose to play again
 */

//  Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
//UI Elements
const game = document.getElementById("game");
      minNum = document.querySelector(".min-num");
      maxNum = document.querySelector(".max-num");
      guessBtn = document.querySelector("#guess-btn");
      guessInput = document.querySelector("#guess-input");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener("click", function(){
    // console.log(guessInput.value); -> will output string 2 so parse it 
    let guess = parseInt(guessInput.value);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter the number between ${min} and ${max}`,'red');
    }
    //Check if won
    if(guess === winningNum){
        //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = "green";
        //Set Message
        setMessage(`${winningNum} is correct!, YOU WIN!`, 'green');
    }
    else{
        //Wrong number
        guessesLeft-=1;
        if(guessesLeft==0){
            //Game over - lost
            //Disable input
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = "red";
        //Set Message
        setMessage(`Game Over ! YOU LOST. The correct number was ${winningNum}`, 'red');
        }else{
            //Game continues -  answer wrong
            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //Tell user its the wrong number
           setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red') ;


        }
    }
});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}