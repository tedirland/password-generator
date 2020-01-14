// DOM Elements
const resultEl = document.getElementById('password');
const lengthEl = prompt("How many characters would you like your password to contain? (Must be between 8 and 128)");
const uppercaseEl = confirm("Would you like your password to contain UPPERCASE characters?");
const lowercaseEl = confirm("Would you like your password to contain lowercase characters?");
const numbersEl = confirm("Would you like your password to contain numbers?");
const symbolsEl = confirm("Would you like your password to contain special characters (! @ #)?");
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const clipboardEl = document.getElementById('clipboard');


// Creating an object to house generator functions

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

};

// Generate Event listen
generateEl.addEventListener('click', () => {
  const length = Number(lengthEl);
  const hasUpper = uppercaseEl;
  const hasLower = lowercaseEl;
  const hasNumber = numbersEl;
  const hasSymbol = symbolsEl;

  console.log(typeof lengthEl);


  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  )

});

// // Copy Password to Clipboard

// clipboardEl.addEventListener('click', () => {

//   const textarea = document.createElement('textarea');
//   const password = resultEl.innerText;

//   if (!password) {
//     return;
//   }

//   textarea.value = password;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard!')




// });

// Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  // 1. Init PW Variable
  // 2. Filter out false types
  // 3. Loop over the length call a generator function  for each type
  // 4. Add final pw to the pw variable and return

  let generatedPassword = '';

  const typesCount = upper + lower + number + symbol;

  console.log('typesCount: ', typesCount);



  // Creating an array to log the boolean values of the options
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter
    // used to weed out fales values from being returned in the array  
    (item => Object.values(item)[0]);


  console.log('typesArr: ', typesArr);


  // If no types are checked, display alert and reload the page
  if (typesCount === 0) {
    alert("You must select at least one type of character!");
    location.reload();
  }


  // Throw another conditional in here to return an error if length is less than 8 and greater than 128

  for (let i = 0; i < length; i += typesCount) {

    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      generatedPassword += randomFunc[funcName]();

    });
  }



  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
console.log(finalPassword);
}



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
