var userScore = localStorage.getItem("secondsLeft");
var names = [];
var highScores = [];
var initials = document.getElementById("initials");
console.log(userScore);
document.getElementById("score").innerHTML = ("Your Score is: " + userScore + ".");
// document.getElementById("initials").value = localStorage.setItem("initials");
//make an array for names
//make an array for scores

//call names and scores on high score page

names.push(initials);
highScores.push(userScore);
console.log(names);
console.log(highScores);
function scoreboard () {
    document.getElementById("initials");
    
}