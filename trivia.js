var bbScore;
var bkScore;
var fbScore;
var tnScore;

function baseballScoreKeepCorrect {
  bbScore = bbScore++
}

function baseballScoreKeepWrong {
  bbScore = bbScore
}

function basketballScoreKeepCorrect {
  bkScore = bkScore++
}

function basketballScoreKeepWrong {
  bkScore = bkScore
}

function footballScoreKeepCorrect {
  fbScore = fbScore++
}

function footballScoreKeepWrong {
  fbScore = fbScore
}

function tennisScoreKeepCorrect {
  tnScore = tnScore++
}

function tennisScoreKeepWrong {
  tnScore = tnScore
}

function findBBScore {
  var div = document.getElementById("baseballScore");
  div.innerHTML = "Final Score: " + bbScore + " / 5";
}
