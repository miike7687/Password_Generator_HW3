// Create my variables for the user confirmations.
var length = "";
var yesNumber;
var yesCharacter;
var yesUpper;
var yesLower;
// Set my arrays up
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
var characters = ["!", "#", "$", "%", "&", "@"];
// What if the user says no to all of the prompts?
var mustChoose;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Start creating my function
function generatePassword() {
  // User chooses how many characters in their password
  var length = prompt(
    "How many characters would you like your password to be? Aim for a number between 8 and 128!"
  );
  // Create a loop just in case user inputs number outside of parameters or hits the cancel button
  while (length < 8 || length > 128) {
    alert(
      "Your password must be between 8 and 128 characters. Please try again!"
    );
    var length = prompt(
      "How many characters would you like your password to be? Aim for a number between 8 and 128!"
    );
  }
  // Tell the user how many characters their password will be
  alert("Your password will have " + length + " characters");

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
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
