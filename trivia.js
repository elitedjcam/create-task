let bbScore = 0;
let bkScore = 0;
let fbScore = 0;
let tnScore = 0;

function baseballScoreKeepCorrect() {
  bbScore++
  var div = document.getElementById("baseballScore");
  div.innerHTML = "Final Score: " + bbScore + " / 5";
}

function baseballScoreKeepWrong() {
  var div = document.getElementById("baseballScore");
  div.innerHTML = "Final Score: " + bbScore + " / 5";
}

function basketballScoreKeepCorrect() {
  bkScore++
  var div = document.getElementById("basketballScore");
  div.innerHTML = "Final Score: " + bkScore + " / 5";
}

function basketballScoreKeepWrong() {
  var div = document.getElementById("basketballScore");
  div.innerHTML = "Final Score: " + bkScore + " / 5";
}

function footballScoreKeepCorrect() {
  fbScore++
  var div = document.getElementById("footballScore");
  div.innerHTML = "Final Score: " + fbScore + " / 5";
}

function footballScoreKeepWrong() {
  var div = document.getElementById("footballScore");
  div.innerHTML = "Final Score: " + fbScore + " / 5";
}

function tennisScoreKeepCorrect() {
  tnScore++
  var div = document.getElementById("tennisScore");
  div.innerHTML = "Final Score: " + tnScore + " / 5";
}

function tennisScoreKeepWrong() {
  var div = document.getElementById("tennisScore");
  div.innerHTML = "Final Score: " + tnScore + " / 5";
}
