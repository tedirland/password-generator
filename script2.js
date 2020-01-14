
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

const resultEl = document.getElementById('password');
const lengthEl = prompt("How many characters would you like your password to contain? (Must be between 8 and 128)");
const uppercaseEl = confirm("Would you like your password to contain UPPERCASE characters?");
const lowercaseEl = confirm("Would you like your password to contain lowercase characters?");
const numbersEl = confirm("Would you like your password to contain numbers?");
const symbolsEl = confirm("Would you like your password to contain special characters (! @ #)?");
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const clipboardEl = document.getElementById('clipboard');
//
// const number = "16";
let lowers = "";
let uppers = '';
let numbers = '';
let symbols = '';
let result = '';

if (lowercaseEl) {
    
    for (i = 0; i < lengthEl; i++) {
    
        lowers += getRandomLower();
    }
}

if (uppercaseEl) {
    
    for (i = 0; i < lengthEl; i++) {
    
        uppers += getRandomUpper();
    }
}

if (symbolsEl) {
    
    for (i = 0; i < lengthEl; i++) {
    
        symbols += getRandomSymbol();
    }
}

if (numbersEl) {
    
    for (i = 0; i < lengthEl; i++) {
    
        numbers += getRandomNumber();
    }
}

result = numbers + uppers + lowers + symbols;

console.log(result.shuffle());
console.log(lowers);
// console.log(lengthEl);
// Begin Generator Functions (using browser Charset for upper, lower and number. String var for symbols)
function getRandomLower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {

    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getRandomSymbol() {

    const symbols = '!@#$%^&*(){}[]=<>/,.'

    return symbols[Math.floor(Math.random() * symbols.length)];
}

//   console.log(getRandomLower());