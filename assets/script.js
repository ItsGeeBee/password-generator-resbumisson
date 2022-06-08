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
    }