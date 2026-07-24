// **Task 3.1 — Slicing Strings**

let sentence = "Learning JavaScript is fun!";

// Get just the word "Learning" using .slice().
let firstWord = sentence.slice(0, 8);
console.log(firstWord);

// Get the last 4 characters ("fun!") using .slice() with a negative index.
let lastFourChars = sentence.slice(-4);
console.log(lastFourChar);


// **Task 3.2 — Combine Strings**

// Use .concat() to join "Hello" and "World" into "Hello World".
let helloWord = "Hello";
let worldWord = "World";
let newSentence = helloWord.concat(" ", worldWord);
console.log(newSentence);

// Use + and template literals to do the same thing. Compare all three approaches.
let sentenceUsingPlus = helloWord + " " + worldWord;
console.log(sentenceUsingPlus); // Using '+' instead of concat().

let templateSentence = `${helloWord} ${worldWord}`;
console.log(templateSentence); // Using template literals.

// All three produce the same output: "Hello World". For joining 2 word we can use concat method in a string. The '+' operator is simple, but template literals are more readable and are generally preferred when combining variables into a string.