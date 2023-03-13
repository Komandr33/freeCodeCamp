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

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
        case "a":
            answer = 'apple';
            break;
        case "b":
            answer = 'bird';
            break;
        case "c":
            answer = 'cat';
            break;
        default: 
            answer = 'stuff';
            break;
    }

  // Only change code above this line
  return answer;
}

//------------------------------------------

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);

//------------------------------------------

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
        answer = "Marley";
        break;
    case 42:
        answer = "The Answer";
        break;
    case 1:
        answer = "There is no #1";
        break;
    case 99:
        answer = "Missed me by this much!";
        break;
    case 7:
        answer = "Ate Nine";
        break;
}

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//------------------------------------------
