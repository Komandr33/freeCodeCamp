let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // Знак '^' указывает на отрицание. Т.е. указывает на символы которые не нужно сопоставлять. Т
let result = quoteSample.match(myRegex); 

//-----------------------------------------------------------------------------

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // В таком виде (вне скобок ^[a-z]) знак "^" ищет шаблон ТОЛЬКО В НАЧАЛЕ строки
let result = calRegex.test(rickyAndCal);

//-----------------------------------------------------------------------------

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Знак '$' позволяет искать шаблон ТОЛЬКО В КОНЦЕ строки
let result = lastRegex.test(caboose);

//-----------------------------------------------------------------------------
