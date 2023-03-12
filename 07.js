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



//------------------------------------------



//------------------------------------------



//------------------------------------------



//------------------------------------------
