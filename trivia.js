let bbScore;
let bkScore;
let fbScore;
let tnScore;

function baseballScoreKeepCorrect {
  bbScore = bbScore++
  var div = document.getElementById("baseballScore");
  div.innerHTML = "Final Score: " + bbScore + " / 5";
}

function baseballScoreKeepWrong {
  bbScore = bbScore
  var div = document.getElementById("baseballScore");
  div.innerHTML = "Final Score: " + bbScore + " / 5";
}

function basketballScoreKeepCorrect {
  bkScore = bkScore++
  var div = document.getElementById("basketballScore");
  div.innerHTML = "Final Score: " + bkScore + " / 5";
}

function basketballScoreKeepWrong {
  bkScore = bkScore
  var div = document.getElementById("basketballScore");
  div.innerHTML = "Final Score: " + bkScore + " / 5";
}

function footballScoreKeepCorrect {
  fbScore = fbScore++
  var div = document.getElementById("footballScore");
  div.innerHTML = "Final Score: " + fbScore + " / 5";
}

function footballScoreKeepWrong {
  fbScore = fbScore
  var div = document.getElementById("footballScore");
  div.innerHTML = "Final Score: " + fbScore + " / 5";
}

function tennisScoreKeepCorrect {
  tnScore = tnScore++
  var div = document.getElementById("tennisScore");
  div.innerHTML = "Final Score: " + tnScore + " / 5";
}

function tennisScoreKeepWrong {
  tnScore = tnScore
  var div = document.getElementById("tennisScore");
  div.innerHTML = "Final Score: " + tnScore + " / 5";
}
