// **Task 8.1 — Loop Through Properties**

let scores = { 
    math: 90, 
    science: 85, 
    art: 95 
};

// Use a for...in loop to log each key and value like: math: 90.
for(const keys in scores){
    console.log(keys, ':', scores[keys]);
}


// Calculate the average of all values in the loop.
let sum = 0;
let count = 0;
for(const key in scores){
    sum += scores[key];
    count++;
}
let average = sum/count;
console.log("Average of all values is: ", average);

