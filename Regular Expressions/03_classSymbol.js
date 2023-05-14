let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // в кв. скобках можно указать все варианты возможных совпадений. Например A[nl]a вернёт и 'Anna' и 'Alla'
let result = quoteSample.match(vowelRegex); 
