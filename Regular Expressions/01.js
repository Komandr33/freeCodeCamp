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

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); // Ищет соипадение из codingRegex в extractStr с промощью метода .match (регистр важен!)

//----------------------------------------------------------------------------------

