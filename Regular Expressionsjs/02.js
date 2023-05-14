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



//----------------------------------------------------------------------------------
