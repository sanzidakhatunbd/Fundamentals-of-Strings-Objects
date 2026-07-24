// **Task 7.1 — Keys and Values**


let book = { 
    title: "The Hobbit", 
    author: "Tolkien", 
    pages: 310 
};

// Get an array of all keys 
const keys = Object.keys(book);
console.log(keys);

// Get an array of all values
const values = Object.values(book);
console.log(values);

// Get an array of all
const entries = Object.entries(book);
console.log(entries);

// Delete the pages property using delete.
delete book.pages;
console.log(book);




// **Task 7.2 — Nested Objects**

let user = {
  username: "coder123",
  address: {
    city: "Austin",
    zip: "78701"
  }
}

// Log the city using dot notation chaining.
console.log(user.address.city);

// Add a country property inside the address.
user.address.country = "USA";
// user["address"]["country"] = "USA";
console.log(user);

// Delete the zip property from the nested object.
delete user.address.zip;
// delete user["address"]["zip"];
console.log(user);