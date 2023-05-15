let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // в кв. скобках можно указать все варианты возможных совпадений. Например A[nl]a вернёт и 'Anna' и 'Alla'
let result = quoteSample.match(vowelRegex); 

//----------------------------------------------------------------------------

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // знак "-" указывает на диапозон поиска "от" - "до"
let result = quoteSample.match(alphabetRegex); 

//----------------------------------------------------------------------------

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // с помощью "-" можно задать так же комбинацию интервалов букв и цифр одновременно
let result = quoteSample.match(myRegex);

//----------------------------------------------------------------------------

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // знак "+" позволяет возвращать слитные(повторяющиеся подряд знаки) вместе
let result = difficultSpelling.match(myRegex); // вернёт ['ss', 'ss']

//----------------------------------------------------------------------------

let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/; // Знак "*" позволяет возвращать символы встречающиеся 0 иболее раз

let result = chewieQuote.match(chewieRegex);
