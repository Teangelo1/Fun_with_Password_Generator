
// Assignment Code with an EventListener added.
  document.querySelector("#generate") .addEventListener("click", writePassword);

// Created Multiple Array's with Numbers of 0-9 & Letter's A-Z both Captial and Lower Case.
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "~" ];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// List of Variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
   var confirmLength =  (prompt("How many characters would you like your password to contain?"));

  // This while loop will loop if the user inputs a choice less than 7 and greater than 128
  while(confirmLength < 8 || confirmLength > 128) {
      alert("Password must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // Figuring out the criteria of the password 
    var confirmSpecialCharacter = confirm("Select OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Select OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Select OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Select OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one number, lower case character, upper case character, or a special charcter");
        var confirmSpecialCharacter = confirm("Select OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Select OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Select OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Select OK to confirm if you would like to include uppercase characters");   
    } 

      // Used the concat function to combine my Array's.
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(num)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      console.log(passwordCharacters)

      // Created a variable with a empty string to allow a random number to be inserted 
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



































































// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// // Creating a random password generator.
// //Random numbers of 0-9 and Random letters of A-Z