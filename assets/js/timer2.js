var secondsLeft = localStorage.getItem("secondsLeft", secondsLeft)
var timer = document.getElementById("timer");

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    localStorage.setItem("secondsLeft", secondsLeft);
    timer.innerHTML = secondsLeft;
  }, 1000);
}


setTime();
setTime();



