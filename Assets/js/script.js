// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

};

function generatePassword() {
  var newPass = ""
  var lowerLet = "abcdefghijklmnopqrstuvwxyz";
  var upperLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specChar = ")(*&^%$#@!";
  var password = prompt("Does the password contain lowercase letters?");
  var password = prompt("Does the password contain uppercase letters?");
  var password = prompt("Does the password contain numbers?");
  var password = prompt("Does the password contain special charcters?");
  var charLength = "<=8, >=128";

  return newPass;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
