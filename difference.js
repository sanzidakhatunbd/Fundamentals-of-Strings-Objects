// **Task 1.1 — Spot the Difference**


let str = "hello";
let arr = ["h", "e", "l", "l", "o"];

// Log str.length and arr.length. What do you notice?

console.log(str.length);
console.log(arr.length);

// consoling both, output results are same. but str shows the number of letters & its a string. where arr is an array it shows the number of elements.


// Try str[0] and arr[0]. Do both work the same way?

console.log(str[0]);
console.log(arr[0]);

// though the results are same. but str shows the first letter while arr shows element when the index number are 0. 


// Try str.push("!") — what happens? Why does this fail for strings but not arrays?

str.push("!");
console.log(str); //gives error
arr.push("!");
console.log(arr); //returns new array

// str.push("!") gives an error cause str is a string & they are immutable. so, push method does work here but arrays are mutable thats why push can add new element there.



// **Task 1.2 — Convert Between Them**

// Convert the string "JavaScript" into an array of characters.

let str = "JavaScript";
console.log(str.split(''));
// *split() convert string into an array of characters.


// Convert the array ["c", "a", "t"] back into a single string "cat".

let arr = ["c", "a", "t"];
let arrNew = arr.join('');
console.log(arrNew);
// * join() convert the array back into a single string.
