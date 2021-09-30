//make timer
var secondsLeft = 60;
var timer = document.getElementById("timer");
var decreaseTime = document.querySelector("wrong")
//getElementById("wrong").addEventListener("click", timeDown(), secondsLeft-15);

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      
      localStorage.setItem("secondsLeft", secondsLeft);
      timer.innerHTML = secondsLeft;
    }, 1000);
  }
setTime();

localStorage.getItem("secondsLeft", secondsLeft);

//make multiple html pages for each question and answers

//make an array of questions
//make an array of answer choices for each question
//make buttons for each choice
//when a click event when a button is pressed
//make a function for the next question to pop up when a button is pressed.
    //deconstruct parameters?

