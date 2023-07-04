// Assignment code here

function generatePassword () {
  generateTypes(charType1, charType2, charType3, charType4);
  var thepassword = [];

  for (x = 0; x <= lengthChoice; x++) {
    thepassword.push(chooseCharacter)
  }
  
  return thepassword

}
var lengthChoice = prompt("Please choose password length between 8 and 128 characters.")
var charType1 = prompt("should the password include lowercase letters? Y or N")
var charType2 = prompt("should the password include uppercase letters? Y or N")
var charType3 = prompt("should the password include numbers? Y or N")
var charType4 = prompt("should the password include special characters? Y or N")

var chooselower = prompt("should the password include lowercase letters? Y or N")
var chooseupper = prompt("should the password include uppercase letters? Y or N")
var choosenumber = prompt("should the password include numbers? Y or N")

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specials = ['!','@','#','$','%','^','&','*','(',')']

if(!stuff.include(variable)) {
  alert("No character type selected! Starting over! Please choose at least one character type.");
  //run choosing of character types function again
}



function createLower() {
  var ranLower = lowercase[Math.floor(Math.random() * lowercase.length)]
  return ranLower;
}

function createUpper() {

}


var ranUppper = uppercase[Math.floor(Math.random() * uppercase.length)]
var ranNumber = numbers[Math.floor(Math.random() * numbers.length)]
var ranSpecial = specials[Math.floor(Math.random() * specials.length)]

var randomTypes = [];

var chooseCharacter = randomTypes[Math.floor(Math.random() * randomTypes.length)]




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function choosePassword()





function generateTypes(lower, upper, num, special) {

  if (lower === 'Y') {
    randomTypes.push(ranLower)
  }
  if (upper === 'Y') {
    randomTypes.push(ranUppper)
  }
  if (num === 'Y') {
    randomTypes.push(ranNumber)
  }
  if (special === 'Y') {
    randomTypes.push (ranSpecial)
  }
  if (lower || upper || num || special !== 'Y') {
    alert("No character type selected! Starting over! Please choose at least one character type.");
    generateTypes();
  }
}

writePassword()

