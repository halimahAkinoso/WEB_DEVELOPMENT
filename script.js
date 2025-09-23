function run(){
//    // Creating variables with let (values can change)
// let studentName = "Alice";
// let studentAge = 20;

// // Creating variables with const (values cannot change)
// const schoolName = "JavaScript Academy";
// const currentYear = 2024;

// // Display the variables
// console.log(studentName);
// console.log(studentAge);
// console.log(schoolName);
// console.log(currentYear);



// // Good variable names - descriptive and follow conventions
// let firstName = "John";
// let lastName = "Doe";
// let phoneNumber = "555-1234";
// let isActive = true;
// let totalAmount = 99.99;

// // Display all variables
// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);
// console.log("Phone:", phoneNumber);
// console.log("Active Status:", isActive);
// console.log("Total Amount:", totalAmount);

// // Strings - text data enclosed in quotes
// let message1 = "Hello World";           // Double quotes
// let message2 = 'JavaScript is fun';     // Single quotes
// let message3 = `Learning to code`;      // Backticks (template literals)

// // Strings can contain numbers, but they're treated as text
// let zipCode = "12345";
// // let phoneNumber = "555-1234";

// // Display the strings
// console.log(message1);
// console.log(message2);
// console.log(message3);
// console.log("Zip Code:", zipCode);
// console.log("Phone:", phoneNumber);

// // Check the type
// console.log("Type of message1:", typeof message1);
// console.log("Type of zipCode:", typeof zipCode);

// // Numbers - numeric values (no quotes needed)
// let age = 25;
// let price = 19.99;
// let temperature = -5;
// let distance = 1000;
// let pi = 3.14159;

// // Very large or small numbers
// let bigNumber = 1000000;
// let scientificNotation = 2.5e6;  // Same as 2,500,000

// // Display the numbers
// console.log("Age:", age);
// console.log("Price:", price);
// console.log("Temperature:", temperature);
// console.log("Distance:", distance);
// console.log("Pi:", pi);
// console.log("Big Number:", bigNumber);
// console.log("Scientific:", scientificNotation);

// // Check the types
// console.log("Type of age:", typeof age);
// console.log("Type of price:", typeof price);

// // Booleans - true or false values
// let isStudent = true;
// let hasLicense = false;
// let isOnline = true;
// let isComplete = false;

// // Display the booleans
// console.log("Is Student:", isStudent);
// console.log("Has License:", hasLicense);
// console.log("Is Online:", isOnline);
// console.log("Is Complete:", isComplete);

// // Check the types
// console.log("Type of isStudent:", typeof isStudent);
// console.log("Type of hasLicense:", typeof hasLicense);

// // Booleans are often the result of comparisons
// let isAdult = age >= 18;
// console.log("Is Adult:", isAdult);
// console.log("Type of comparison result:", typeof isAdult);

// let a = 10;
// let b = 3;

// console.log("a =", a, "and b =", b);
// console.log(""); // Empty line for spacing

// // Basic arithmetic operations
// console.log("Addition: a + b =", a + b);
// console.log("Subtraction: a - b =", a - b);
// console.log("Multiplication: a * b =", a * b);
// console.log("Division: a / b =", a / b);
// console.log("Remainder: a % b =", a % b);
// console.log("Exponentiation: a ** b =", a ** b);

// // More examples
// console.log(""); // Empty line
// console.log("More examples:");
// console.log("15 / 4 =", 15 / 4);
// console.log("15 % 4 =", 15 % 4);  // What's left over after dividing
// console.log("2 ** 8 =", 2 ** 8);  // 2 to the power of 8


// let firstName = "Jane";
// let lastName = "Smith";
// let age = 28;

// // Old way: String concatenation with +
// let greeting1 = "Hello, my name is " + firstName + " " + lastName + " and I am " + age + " years old.";

// // Modern way: Template literals with backticks
// let greeting2 = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;

// console.log("Using concatenation (+):");
// console.log(greeting1);

// console.log(""); // Empty line

// console.log("Using template literals (backticks):");
// console.log(greeting2);

// // Template literals can also do math inside the ${}
// console.log(`Next year I will be ${age + 1} years old.`);
// console.log(`My name has ${firstName.length} letters in the first name.`);""


// let message = "  JavaScript is Amazing!  ";

// console.log("Original string:", `"${message}"`);
// console.log(""); // Empty line

// // String property
// console.log("Length:", message.length, "characters");

// // String methods
// console.log("Uppercase:", message.toUpperCase());
// console.log("Lowercase:", message.toLowerCase());
// console.log("Trimmed:", `"${message.trim()}"`);  // Notice spaces removed
// console.log("Trimmed length:", message.trim().length);

// // Method chaining - using multiple methods together
// console.log("Trimmed and uppercase:", message.trim().toUpperCase());

// // Finding text within strings
// console.log("Position of 'Script':", message.indexOf("Script"));
// console.log("Includes 'Amazing':", message.includes("Amazing"));

// let name = "Alice";
// // let age = 25;
// let isStudent = true;
// let score = null;
// let grade;  // undefined
// let hobbies = ["reading", "coding"];
// let person = {name: "Bob", age: 30};

// console.log("Variable values and their types:");
// console.log(""); // Empty line

// console.log('name:', name, '→ type:', typeof name);
// console.log('age:', age, '→ type:', typeof age);
// console.log('isStudent:', isStudent, '→ type:', typeof isStudent);
// console.log('score:', score, '→ type:', typeof score);  // null shows as "object" - quirk!
// console.log('grade:', grade, '→ type:', typeof grade);
// console.log('hobbies:', hobbies, '→ type:', typeof hobbies);  // arrays are "object"
// console.log('person:', person, '→ type:', typeof person);

// console.log(""); // Empty line
// console.log("Remember: typeof null returns 'object' (JavaScript quirk)");
// console.log("Arrays also return 'object' because they are a type of object");


let firstName = "Halimat";
let lastName = "Adegboyega";
let age = 35;
let schoolName = 'Solace international';
let grade = "A";
let isGraduated = true;

let fullName = firstName + lastName
console.log(" ------ Student Profile ------- ")

console.log("Name: ", `${fullName.toUpperCase}`)
console.log ("Full Name Length: ", `"${fullName.length}"`, "characters")
console.log("Age: " , `${age}` , "(Next Year: )" , `${age + 1}`)
console.log("School: ", `${schoolName}`)
console.log("Grade: " `${grade}`)
// console.log("Graduated: ", `${isGraduated}`)
// console.log("My name is", `${fullName}` , "I am" , `${age}`, "years old", "I am a graduate of ", `${schoolName}` , "with grade" `${grade}`)



// console.log ("My First Name contain", `"${firstName.length}"`, "characters")
}

let firstName = "Halimat";
