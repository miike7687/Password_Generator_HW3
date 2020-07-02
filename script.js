// Create my variables for the user confirmations.

var passwordLength = "";
var yesNumber;
var yesCharacter;
var yesUpper;
var yesLower;
// Set my arrays up
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numbers);
var lowers = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lowers);
var uppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(uppers);
var characters = ["!", "#", "$", "%", "&", "@"];
console.log(characters);
// What if the user says no to all of the prompts?
var mustChoose;
// Create a variable that stores all the user's parameters
var userSelections;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Start creating my function
function generatePassword() {
  // User chooses how many characters in their password
  var passwordLength = prompt(
    "How many characters would you like your password to be? Aim for a number between 8 and 128!"
  );
  // Create a loop just in case user inputs number outside of parameters or hits the cancel button
  while (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Your password must be between 8 and 128 characters. Please try again!"
    );
    var passwordLength = prompt(
      "How many characters would you like your password to be? Aim for a number between 8 and 128!"
    );
  }
  // Tell the user how many characters their password will be
  alert("Your password will have " + passwordLength + " characters");

  // Ask the user to confirm the other parameters
  var yesNumber = confirm(
    "Click OK if you would like your password to include a number."
  );
  var yesCharacter = confirm(
    "Click OK if you would like your password to include a special character."
  );
  var yesLower = confirm(
    "Click OK if you would like your password to include a lowercase letter."
  );
  var yesUpper = confirm(
    "Click OK if you would like your password to include an uppercase letter."
  );
  // Create a loop just in case the user says cancel for all 4 parameters
  while (
    yesNumber !== true &&
    yesCharacter !== true &&
    yesLower !== true &&
    yesUpper !== true
  ) {
    alert("You must select at least one parameter!");
    // Confirm which characters the user wants in their password
    var yesNumber = confirm(
      "Click OK if you would like your password to include a number."
    );
    var yesCharacter = confirm(
      "Click OK if you would like your password to include a special character."
    );
    var yesLower = confirm(
      "Click OK if you would like your password to include a lowercase letter."
    );
    var yesUpper = confirm(
      "Click OK if you would like your password to include an uppercase letter."
    );
  }
  //  Create an empty set array of all the characters that COULD be selected
  var passwordCharacters = [];
  //  Concatenate all the possible characters so that they are all in the string
  if (yesNumber === true) {
    passwordCharacters = passwordCharacters.concat(numbers);
  }

  if (yesCharacter === true) {
    passwordCharacters = passwordCharacters.concat(characters);
  }

  if (yesLower === true) {
    passwordCharacters = passwordCharacters.concat(lowers);
  }

  if (yesUpper === true) {
    passwordCharacters = passwordCharacters.concat(uppers);
  }
  // Test this in the console log to see if your pool of possible password characters shows up correctly
  console.log(passwordCharacters);
  // Create empty set of final password
  var finalPassword = "";
  // Create a loop that continues to pull random characters until it reaches the user's length choice
  for (var i = 0; i < passwordLength; i++) {
    // Final password should pull from possible characters but use user's choice for length
    finalPassword +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(finalPassword);
  }
  // Return final password in the textbox
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
