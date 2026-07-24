// **Task 6.1 — Dot vs Bracket Notation**


let car = { 
    brand: "Toyota", 
    model: "Corolla", 
    year: 2022 
};

// Get brand using dot notation.
let getBrand = car.brand;
console.log(getBrand);


// Get model using bracket notation.
let getModel = (car['model']);
console.log(getModel);


// Add a new property color: "blue" using bracket notation.
car["color"] = "blue";
console.log(car);


// Update year to 2023 using dot notation.
car.year = 2023;
console.log(car);

