// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0)  return undefined;


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//-----------------------------------------------------------------

let count = 0;

function cc(card) {
    if (card == 2 || card == 3 ||
        card == 4 || card == 5 || card == 6) {
        count++
    } else if (card == 10 || card == 'J' ||
        card == 'Q' || card == 'K' || card == 'A') {
        count--
    }

    if (count > 0) {
        return count + ' Bet'
    } else return count + ' Hold'
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//-----------------------------------------------------------------

const myDog = {
    name: 'Tuzik',
    legs: 4,
    tails: 1,
    friends: ['humans', 'childrens']
};

//-----------------------------------------------------------------

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//-----------------------------------------------------------------

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//-----------------------------------------------------------------



//-----------------------------------------------------------------



//-----------------------------------------------------------------
