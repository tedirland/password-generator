// // Assignment Code (SHOULD BE COMPLETE IN GATHERING INPUTS FROM USER)

// DOM Elements
const resultEl = document.getElementById('password');
const lengthEl = prompt("How many characters would you like your password to contain? (Must be between 8 and 128)");
const uppercaseEl = confirm("Would you like your password to contain UPPERCASE characters?");
const lowercaseEl = confirm("Would you like your password to contain lowercase characters?");
const numbersEl = confirm("Would you like your password to contain numbers?");
const symbolsEl = confirm("Would you like your password to contain special characters (! @ #)?");
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const length = +lengthEl.value;


var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

};

// Generate Event listen
generateEl.addEventListener('click', generatePassword); {
  const length = parseInt(lengthEl);
  const hasUpper = uppercaseEl;
  const hasLower = lowercaseEl;
  const hasNumber = numbersEl;
  const hasSymbol = symbolsEl;


  console.log(length, hasLower,hasNumber, hasSymbol, hasUpper);
console.log(generatedPassword);


  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )

};

// Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  // Init PW Variable
  // Filter out false types
  // Loop over the length call a generator function  for each type
  // Add final pw to the pw variable and return

  var generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  // console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (item => Object.values(item)[0]
    );

  // console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    alert("You must select at least one type of character! Please reload this page and try again.")
  }
  for (let i = 0; i < length; i += typesCount) {

    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];


      generatedPassword += randomFunc [funcName]();
      // console.log('funcName: ', funcName);


    });
  }

  // console.log(generatedPassword);

}



// Begin Generator Functions
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
// End Generator Functions











// function writePassword() {


//       passwordText.textContent = password;

  // copyBtn.removeAttribute("disabled");
  // // copyBtn.focus();



  // passwordText.textContent = need to set a variable for password input and use it here


// }

// function copyToClipboard() {
  // BONUS 
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword());
// // generateBtn.addEventListener("click")

// // BONUS EVENT LISTENER
