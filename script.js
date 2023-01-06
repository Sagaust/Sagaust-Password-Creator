// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
let passwordLength = 0;
let passwordArray = [];
// a prompt for password length:
// *the user inputs the length between 10 and 65
passwordLength = prompt('How many characters would you like your password to contain?');
// a prompt for special character:
// *the user clicks 'ok' or 'cancel', which returns 'true' or 'false'
var includeSpecialCharacters = confirm('Click OK to confirm including special characters');
// a prompt for numeric character:
var includeNumericCharacters = confirm('Click OK to confirm including numeric characters');
// a prompt for lowercase character:
var includeLowerCaseCharacters = confirm('Click OK to confirm including lowercase characters');
// a prompt for uppercase character:
var includeUppercaseCharacters = confirm('Click OK to confirm including uppercase characters');

// Function to prompt user for password options
function getPasswordOptions() {
    if (includeSpecialCharacters.checked) {
        password += getRandom(upperCasedCharacters)
    }
    if (includeLowercaseCharacters.checked) {
        password += getRandom(lowerCasedCharacters)
    }
    if (includeSpecialCharacters.checked) {
        password += getRandom(specialCharacters)
    }
    if (includeNumericCharacters.checked) {
        password += getRandom(numericCharacters)
    }

}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr.at(Math.floor(Math.random() * arr.length))
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);