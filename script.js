// DOM Elements Established
const resultEl = document.getElementById('password');
const lengthEl = prompt("How many characters would you like your password to contain? (Must be between 8 and 128)");
const uppercaseEl = confirm("Would you like your password to contain UPPERCASE characters?");
const lowercaseEl = confirm("Would you like your password to contain lowercase characters?");
const numbersEl = confirm("Would you like your password to contain numbers?");
const symbolsEl = confirm("Would you like your password to contain special characters (! @ #)?");
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


// Creating an object to house generator functions

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol

};

// Generate Event listen for Generate Button
generateEl.addEventListener('click', () => {
  const length = Number(lengthEl);
  const hasUpper = uppercaseEl;
  const hasLower = lowercaseEl;
  const hasNumber = numbersEl;
  const hasSymbol = symbolsEl;

  //Changes Inner Text of the Result Element (TextArea) to the output of the generatePassword function
  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  )

});

// Copy Password to Clipboard Function Defined

function copyToclip() {

  const textarea = document.getElementById('password');
  const password = textarea.value;


  console.log(textarea.value);
  textarea.select();
  document.execCommand('copy');
  alert("Password copied to clipboard.")


};
//Event Listener for copyToclip function
clipboardEl.addEventListener('click', copyToclip);

// Generate Password Function - passing the random number gen functions as well as the value of length from the prompt
function generatePassword(upper, lower, number, symbol, length) {

  //Set generatedPassword to an empty string
  let generatedPassword = '';

  // create a variable to track the number of different character gen functions are being run
  const typesCount = upper + lower + number + symbol;

  // Creating an array to log the boolean values of the options
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter
    // used to weed out fales values from being returned in the array - we only want to loop through true values
    (item => Object.values(item)[0]);
    //Isolate the boolean values


  // Parameter conditionals to prevent no types being selected or a number outside of the 8-128 range
  if (typesCount === 0) {
    alert("You must select at least one type of character!");
    location.reload();
  } else if (parseInt(lengthEl) < 8 || parseInt(lengthEl) > 128) {

    alert("Passwords must be between 8 and 128 characters!")
    location.reload();
    
  }

  //Looping through the array, using typesCount as the incrementing factor

  for (let i = 0; i < length; i += typesCount) {

    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //Defines funcName as the specific function from the function array randomFunc
      console.log('funcName: ', funcName);
      //Append the empty string defined by generatedPassword with the specific function that is being called by the for loop
      generatedPassword += randomFunc[funcName]();

    });
  }

  //create new const finalPassword which slices the generatedPassword output based on the length set by user
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