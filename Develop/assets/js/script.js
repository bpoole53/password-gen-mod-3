// Declare global variables
var whichTypes = [];
var lengthChoice;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//this takes the types generated by the generateTypes function and passes it as an argument to the chooseCharacter function which is part of a for loop whose length is determined by the lengthChoice variable which is determined as part of a prompt from the chooseCharacter function.  it then takes the comma delimited string value and removes the commas and returns that value.  It also returns the whichTypes variable to an empty array so another password can be generated without having to refresh the page.
function generatePassword () {
  var thepassword = [];
  generateTypes();
  
  for (x = 0; x < lengthChoice; x++) {
    thepassword.push(chooseCharacter(whichTypes))
  }
  var stringpass = thepassword.join('');
  whichTypes = [];
  return stringpass
}

//this is where all of the prompts take place.  If a password length is < 8 or > 128 it calls upon itself to restart the function.  If no Y value is given it restarts the function.
function generateTypes() {
  lengthChoice = prompt("Please choose password length between 8 and 128 characters.");
  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("Invalid number choice, please choose a number between 8 and 128");
    generateTypes();
  }
  var lower = prompt("should the password include lowercase letters? Y or N");
  var upper = prompt("should the password include uppercase letters? Y or N");
  var num = prompt("should the password include numbers? Y or N");
  var special = prompt("should the password include special characters? Y or N");
  var response = [lower, upper, num, special];

  if (lower === 'Y') {
    whichTypes.push('L')
  }
  if (upper === 'Y') {
    whichTypes.push('U')
  }
  if (num === 'Y') {
    whichTypes.push('N')
  }
  if (special === 'Y') {
    whichTypes.push('S')
  }
  if (response.includes('Y') === false) {
    alert("No character type selected! Starting over! Please choose at least one character type.");
    whichTypes = [];
    generateTypes();
  }
}

//declared all of the possible characters.  Special characters is broad, so I narrowed it down to the basics.  The generateTypes function pushes string values to the types array.  Apparently even the strict comparison operator will only check if a value exists within a comma delimited string and it won't compare arrays so I had to remove the commas to actually be able to accurately generate the character types based on the user input.  Anyway, this function will generate a random character based on the earlier user input (either 1 type, 2 types, 3 types, or 4 types), and then it will randomly choose among those and return that value.
function chooseCharacter (charUser) {
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var specials = ['!','@','#','$','%','^','&','*','(',')'];
  var charChoice = charUser.join('');
  var types= [];
  var finalchar;
  
  if (charChoice === 'L') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  } 
  if (charChoice === 'LU') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  }
  if (charChoice === 'LUN') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (charChoice === 'LUNS') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'U') {
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);  
  }
  if (charChoice === 'UN') {
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (charChoice === 'UNS') {
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'US') {
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }  
  if (charChoice === 'N') {
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (charChoice === 'NS') {
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'LNS') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'LUS') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'LN') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (charChoice === 'LS') {
    types.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  if (charChoice === 'S') {
    types.push(specials[Math.floor(Math.random() * specials.length)]);
  }
  finalchar = types[Math.floor(Math.random() * types.length)];
  return finalchar;
}  

// the "main" function, starts all of the fun. Stores the string generated by the generatePassword function in the password variable, then puts that string in the text box on the web page.  Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button and run the writePassword function which serves as the "main" function.
generateBtn.addEventListener("click", writePassword);










