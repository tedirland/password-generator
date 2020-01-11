// Assignment Code (SHOULD BE COMPLETE IN GATHERING INPUTS FROM USER)
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("How Long Would You Like Your Password To Be?")
var specialChar = confirm ("Would you like your password to contain special characters (! @ #)?")
var numericChar = confirm ("Would you like your password to contain numbers?");
var lowerCaseChar = confirm ("Would you like your password to contain lowercase characters?")
var upperCaseChar = confirm ("Would you like your password to contain UPPERCASE characters?")

// Write password to the #password input




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // passwordText.textContent = need to set a variable for passord input and use it here

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
