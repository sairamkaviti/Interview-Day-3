// Remove Duplicates :
let numbers = [1, 3, 2, 1, 4, 5, 3, 4, 2, 3, 4, 6, 5, 88, 99, 76, 4, 3, 2, 1];
let numbersArray = [1, 3, 2, 1, 4, 5, 3, 4, 2, 3, 4, 6, 5, 88, 99, 76, 4, 3, 2, 11,12,1];

console.log(numbers);
// using Set method:
let result = [...new Set(numbers)];
console.log(result);

// using loops :

function removeDups(arr) {
    let result = [];
    for (let ele of arr) {
        if (result.indexOf(ele) === -1) {
            result.push(ele)
        }
    }
    return result.sort((a, b) => a - b);
}
console.log(removeDups(numbers));

// using filter:
let removeDupNums = numbersArray.filter((ele,ind) => {
    return numbersArray.indexOf(ele) == ind;
})
console.log(removeDupNums);

// Write a function that returns the reverse of a string

// using array methods and using loops:
let myWord = "Never Give Up !";
console.log(myWord);
function reverseString(str) {
    let result = "";
    // let result = str.split(" ").reverse().join(" ");
    for (let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString(myWord));

// Write a function that returns the longest word in the sentence
let mySent = "Write a functions that returns the longest word in the sentence";

function longestWirdFn(str) {
    let strToArray = str.split(" ");
    console.log(strToArray)
    let longWord = strToArray[0];
    for (let word of strToArray) {
        if (longWord.length <= word.length) {
            longWord = word;
        }
    }
    return longWord;
}

console.log(longestWirdFn(mySent));

// Write a function that checks whether given string is palindrome or not
// using array methods :
let palStr = "Racecar";
console.log(palStr.toLowerCase())
function checkPalindrome(str) {
    let reverseStr = str.toLowerCase().split("").reverse().join("");
    return str.toLowerCase() == reverseStr;
}
console.log(checkPalindrome(palStr));

// using loops :
let myPalindrome = "Madama";
function checkPalOrNot(str) {
    let palWord = str.toLowerCase();
    console.log(palWord);
    for (let i = 0, j = palWord.length - 1; i < j; i++, j--){
        if (palWord[i]!==palWord[j]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalOrNot(myPalindrome))

