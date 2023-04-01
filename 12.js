const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return 'No such property'
            }
        }
    }
    return 'No such contact';
}

lookUpProfile("Akira", "likes");

//------------------------------------------------------------------------------

function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

//------------------------------------------------------------------------------

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//------------------------------------------------------------------------------

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

//------------------------------------------------------------------------------

function checkEqual(a, b) {
  return a == b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

//------------------------------------------------------------------------------

function checkSign(num) {
  return num > 0 ? 'positive'
  : num < 0 ? 'negative'
  : 'zero';
}

checkSign(10);

//------------------------------------------------------------------------------



//------------------------------------------------------------------------------
