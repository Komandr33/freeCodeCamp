let myString = "Hello, World!";
let myRegex = /Hello/;  
let result = myRegex.test(myString); // Ищет совпадение myRegex в myString с помощью метода .test (регистр важен!)

//----------------------------------------------------------------------------------

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//----------------------------------------------------------------------------------

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

//----------------------------------------------------------------------------------

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //  флаг "i" убирает восприимчивость к регитру
let result = fccRegex.test(myString);

//----------------------------------------------------------------------------------

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Ищет соипадение из codingRegex в extractStr с промощью метода .match (регистр важен!)

//----------------------------------------------------------------------------------

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;  //  флаг "g" означает - глобальный, т.е. ищет все совпадения в строке, а не первое. Флаг "i" убирает восприимчивость к регитру
let result = twinkleStar.match(starRegex);

//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------
