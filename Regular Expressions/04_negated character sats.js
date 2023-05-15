let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // '^' указывает на отрицание. Т.е. указывает на символы которые не нужно сопоставлять. Т
let result = quoteSample.match(myRegex); 

//-----------------------------------------------------------------------------

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // В таком виде (вне скобок) знак "^" ищет выражение только в начале строки
let result = calRegex.test(rickyAndCal);

//-----------------------------------------------------------------------------
