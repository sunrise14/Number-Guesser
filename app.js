/*
 Game function:
 - player must guess a number  between a min and max
 - player gets a certain amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if he loses
 - let the player choose to play again
 */

 let x = Math.round(Math.random()*9)+1;
 let y = Math.round(Math.random()*9)+1;
 let z = Math.round(Math.random()*9)+1;
 const min = document.getElementById("min-num");
 const max = document.getElementById("max-num");
 min.textContent=x;
 max.textContent=y;
 const message =  document.querySelector(".message");
 const guess = document.getElementById("guess-value");

 guess.addEventListener("click",checkAnswer);

 function checkAnswer(){
    // console.log("clicked");
let count = 3;
 const num = document.getElementById("guess-input").value;
 console.log(num);
 if(num != z && count != 0){
     
     count-=1;
     console.log(count);
    message.textContent=`Wrong Answer, You have ${count} more chances left`;
    if(count == 0){
        message.textContent=`Sorry, currect answer is ${z}`;
    }

 }
 if(num === z){
     message.textContent="Currect Answer";
 }
 else{
     message.textContent=`Sorry, currect answer is ${z}`;
 }
 }

