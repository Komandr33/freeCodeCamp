const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'gav-gav';

//-----------------------------------------------------------------

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

//-----------------------------------------------------------------

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   let lookup = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'Frank'
    }
  result = lookup[val]
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//-----------------------------------------------------------------

function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    };

    return "Change Me!";
    // Only change code above this line
}

//-----------------------------------------------------------------



//-----------------------------------------------------------------



//-----------------------------------------------------------------
