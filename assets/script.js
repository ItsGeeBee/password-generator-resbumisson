//Assignment Code //
var generateBtn = document.querySelector("#generate");

// Global variables //
var lengthRange = "";
var includeSpecialChar;
var includeNumber;
var includeUpperCase;
var includeLowercase;

// set arrays for each //
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    var lengthRange = (prompt("Please pick a password length between 8 - 128 characters"));
  
   
    if(lengthRange < 7 || lengthRange > 129) { // If the length range is less than 7 or more than 129 = prompt //
        alert("Password length must be between 8-128 characters!");
        var lengthRange = (prompt("Please pick a password length between 8 - 128 characters?"));
        } 
    // Window prompts for user to click 'ok' or cancel - Decides what the password will be made up with //
    var includeSpecialChar = confirm("Would like to include special characters");
    var includeNumber = confirm("Would like to include numeric characters");    
    var includeLowercase = confirm("Would like to include lowercase characters");
    var includeUpperCase = confirm("Would like to include uppercase characters");

    // empty array //
      var passwordCharacters = []
      
    // Loop, checking what needs to be included in the password //
    if (includeSpecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (includeNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (includeLowercase) {
      passwordCharacters = passwordCharacters.concat(charLower)
    }

    if (includeUpperCase) {
      passwordCharacters = passwordCharacters.concat(charUpper)
    }

      console.log(passwordCharacters)
}
