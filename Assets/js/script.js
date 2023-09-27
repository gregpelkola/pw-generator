// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

};

function generatePassword() {
  var newPass = "";
  var passLength = "8-128";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specChar = ")(*&^%$#@!";
  var passLength = prompt("Would you like the password to have between 8-128 characters?");
  var hasLowercase = confirm("Would you like the password to contain lowercase letters?");
  var hasUppercase = confirm("Would you like the password to contain uppercase letters?");
  var hasNumbers = confirm("Would you like the password to contain numbers?");
  var hasSpecial = confirm("Would you like the password to contain special charcters?");
};  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
