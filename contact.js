// **Task 9.1 — Contact Book**


// Build a small "contact" system:

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

// Convert the email to lowercase and update the object.
contact.email = contact['email'].toLowerCase();
console.log(contact);

// Loop through the contact object and print each key-value pair.
for(const key in contact){
    console.log(key, ':', contact[key]);
}

// Add a new property favoriteWords: [] (an array) — push 3 words to it.
contact.favoriteWords = [];
contact.favoriteWords.push('JavaScript');
contact.favoriteWords.push('CSS');
contact.favoriteWords.push('HTML');
console.log(contact);

// Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
contact.name = contact.name.split('').reverse().join('');
console.log(contact);

// Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.
if(contact.email.includes("@email")){
    console.log('Email is Valid.');
}
else{
    console.log('Email is not Found.')
};