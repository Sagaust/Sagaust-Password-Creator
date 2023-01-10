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

let password = "Unable to generate password"; 
let passwordLength = 0;
let choiceValidation = false;
let userChoice = [];


// Function to prompt user for password options
function getPasswordOptions() {
// a prompt for password length:
// *the user inputs the length between 10 and 65
    passwordLength = parseInt(prompt('How many characters would you like your password to contain?'));
    if(isNaN(passwordLength)) {
        alert("Kindly type in a number.")
        confirm();
        choiceValidation = false;
        return;
    } 
    else if(passwordLength < 10  || passwordLength > 65) {
        alert('Password must be in between 10 and 65 characters long. Please try again');
        choiceValidation = false;
        return;
    }
    else {
        // a prompt for special character:
        // *the user clicks 'ok' or 'cancel', which returns 'true' or 'false'
        var includeSpecialCharacters = confirm('Click OK to confirm including special characters');
        // a prompt for numeric character:
        var includeNumericCharacters = confirm('Click OK to confirm including numeric characters');
        // a prompt for lowercase character:
        var includeLowerCaseCharacters = confirm('Click OK to confirm including lowercase characters');
        // a prompt for uppercase character:
        var includeUppercaseCharacters = confirm('Click OK to confirm including uppercase characters');

        userChoice = [includeSpecialCharacters, includeLowerCaseCharacters, includeUppercaseCharacters, includeNumericCharacters];

        if(userChoice.every(i => i === false)) {
            confirm("Kindly make a choice of at least one character type.");
            return;
        } else {
            console.log("Valid inputs");
            choiceValidation = true;
        }
    }
}


// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function characterSetSelector() {
    if(userChoice[i] === true){
        console.log(getRandom(userChoice[i]));
    }
}

// Function to generate password with user input
function generatePassword() {
    getPasswordOptions();
    if(choiceValidation === true){
        var i = 0;
        temporaryPassword = [];
        while (i < passwordLength){
            if(userChoice[0] === true) {
                temporaryPassword.push(getRandom(specialCharacters));
                i++;
            }
            if(userChoice[1] === true) {
                temporaryPassword.push(getRandom(lowerCasedCharacters));
                i++;
            }
            if(userChoice[2] === true) {
                temporaryPassword.push(getRandom(upperCasedCharacters));
                i++;
            }
            if(userChoice[3] === true) {
                temporaryPassword.push(getRandom(numericCharacters));
                i++;
            }
        }
        password = temporaryPassword.join("");
    }
    else{
        return;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

function resetPassword(){
    let password = "Unable to generate password"; 
    let passwordLength = 0;
    let choiceValidation = false;
    let userChoice = [];
}
// Write password to the #password input
function writePassword() {
    generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
    resetPassword();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);