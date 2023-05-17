let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //  флаг "i" убирает восприимчивость к регитру
let result = fccRegex.test(myString);

//----------------------------------------------------------------------------------

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;  //  флаг "g" означает - глобальный, т.е. ищет все совпадения в строке, а не первое. Флаг "i" убирает восприимчивость к регитру
let result = twinkleStar.match(starRegex);

//----------------------------------------------------------------------------------

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // "." это подстановочный знак, который заменяет любой символ в регулярном выражении
let result = unRegex.test(exampleStr); 

//----------------------------------------------------------------------------------

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w]/g;                        // "[\w]" заменяет собой диапазон "[A-Za-z0-9_]" 
let result = quoteSample.match(alphabetRegexV2).length;

//----------------------------------------------------------------------------------

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;                         // "[\W]" заменяет собой диапазон "[^A-Za-z0-9_]" 
let result = quoteSample.match(nonAlphabetRegex).length;

//----------------------------------------------------------------------------------

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;                                 // "[\d]" заменяет собой диапазон "[0-9]" 
let result = movieName.match(numRegex).length;

//----------------------------------------------------------------------------------

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;                               // "[\D]" заменяет собой диапазон "[^0-9]" 
let result = movieName.match(noNumRegex).length;

//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------
