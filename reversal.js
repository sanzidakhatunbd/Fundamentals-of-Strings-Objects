// **Task 4.1 — Three Reversal Methods**


// Write a function reverseString(str) three different ways:

// Using .split(""), .reverse(), and .join("")
// 1.
function reverseString(str){
    let letters = str.split("");
    let reversedLetters = letters.reverse();
    let reversedString = reversedLetters.join('');
    console.log(reversedString);
}
let sentence = "JavaScript";
reverseString(sentence);

function reverseString2(str2){
    let reversedString2 = str2.split("").reverse().join('');
    console.log(reversedString2);
}
let sentence2 = "JavaScript";
reverseString2(sentence2);

// Using a for loop that builds the reversed string character by character
// 2.
function reversedString3(str){
let reversed = "";
for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
};
console.log(reversed);
}
reversedString3("javascript");


// 3.
function reverseString4(str) {
    let reversed = "";
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    console.log(reversed);
}

reverseString4("JavaScript");
// Test all three with "JavaScript" → should return "tpircSavaJ".
// all are returning same outputs.

// Bonus: Which method do you think is fastest? Why?
// The for loop may be faster because it doesn't need to call multiple string and array methods or create intermediate arrays. It directly builds the reversed string.
