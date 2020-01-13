// Assignment Code (SHOULD BE COMPLETE IN GATHERING INPUTS FROM USER)
// var passwordEl = document.getElementById("password"); Defininig this variable in function
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("How many characters would you like your password to contain? (Must be between 8 and 128)")
var specialChar = confirm("Would you like your password to contain special characters (! @ #)?")
var numericChar = confirm("Would you like your password to contain numbers?");
var lowerCaseChar = confirm("Would you like your password to contain lowercase characters?")
var upperCaseChar = confirm("Would you like your password to contain UPPERCASE characters?")
// These are the arrays for the different strings
var passwordOptions = {

  "special characters": ["! @ # $ % ^ & * ( ) _ + "],

  "numeric charachers": ["1 2 3 4 5 6 7 8 9"],

  "lowercase characters": ["q w e r t y u i o p a s d f g h j k l z x c v b n m"],

  "uppercase characters": ["Q W E R T Y U I O P A S D F G H J K L Z X C V B N M"],

  "all options": ["! @ # $ % ^ & * ( ) _ + 1 2 3 4 5 6 7 8 9 q w e r t y u i o p a s d f g h j k l z x c v b n m Q W E R T Y U I O P A S D F G H J K L Z X C V B N M"]



};

// Write password to the #password input





function writePassword() {
  var password = generatePassword(function () {
    // Overarching requirement - passwordLength must be between 8 and 128 for the function to run
    if (passwordLength >= 8 && passwordLength <= 128) {

      // If all 4 options are confirmed
      if (specialChar && numericChar && lowerCaseChar && upperCaseChar) {
        Math.random

      }

      else if (numericChar && lowerCaseChar && upperCaseChar) {

      }

      else if (specialChar && lowerCaseChar && upperCaseChar) {

      }
      else if (specialChar && numericChar && upperCaseChar) {

      }

      else if (specialChar && numericChar && lowerCaseChar) {

      }

      else if (specialChar && numericChar) {

      }

      else if (specialChar) {

      }

      else if (numericChar) {

      }

      else if (lowerCaseChar) {

      }

      else if (upperCaseChar) {

      }

      else {
        alert("You must select at least one type of characters to use!")
      }

    }

    // If password length is not between 8 and 128, display the following alert
    else {
      alert("Please enter a number between 8 and 128!")
    }

  });
  var passwordText = document.querySelector("#password");
  // passwordText.textContent = need to set a variable for password input and use it here

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click")

// BONUS EVENT LISTENER
