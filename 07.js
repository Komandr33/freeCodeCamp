const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
return (strokes == 1) ? names[0] :
(strokes <= par - 2	) ? names[1] :
(strokes == par - 1) ? names[2] :
(strokes == par) ? names[3] :
(strokes == par + 1) ? names[4] :
(strokes ==par + 2) ? names[5] : names[6] 

  // Only change code above this line
}

golfScore(5, 4);

//------------------------------------------

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;  
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;  
}


  // Only change code above this line
  return answer;
}

//------------------------------------------



//------------------------------------------



//------------------------------------------



//------------------------------------------
