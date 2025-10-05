// // function greet(name) {
// //     return  `Hello ${name}`;
// // }
// // console.log(greet('esther'))

// function runFirstProgram() {
//         //this is a commmit - javascript ignores  this line
//         // let's display a message in our output area
// document.getElementById(`first-output`).innerHTML = 'Hello  world ! this message  was created by javascript';

//          //Also show it in the browser console (open Developer Tools to see)
// console.log("Hello from javascript console !");
// }
// function showAlert() {
//         // show a popup alert
// alert('this is a javascript  alert!');
// }
// function showBasicVariables() {
//             //creating variables with different declarations

//     let StudentName = "Alice";
//     const SchoolName = "Tech Academy";
//     let age =25;

//             // display the variables
//     let output = `
//             Student Name: ${StudentName}
//             school Name: ${SchoolName}
//             Age : ${age}

//              `;
//     document.getElementById('variables-output').innerHTML = output;
//         console.log('student:', StudentName, 'age:', age, 'school:', SchoolName);
//     }
//     function showBasicVariables(){
//        // Creating variables with different declarations 
//        let StudentName = "Alice";
//        const SchoolName = "Tech Academy";
//        let age = 25;

//        // Display the variables
//        let output = ` 
//        Student Name: ${StudentName}
//        school Name:  ${SchoolName}
//        Age: ${age}
//        `;
//        document.getElementById('variables-output').innerHTML=output;
//        console.log('student', StudentName, 'Age:', age, 'school:', SchoolName);
//     }
//     function showBasicVariablesTypes() {
//         //different data types
//         let UserName = "John Doe";         // String
//         let UserAge = 30;                  // Number
//         let isActive = true;               // Boolean
//         let salary = 50000.50;             // Number (with decimals)
//         let middleName = null;             // Null (intentionally empty)
//         let nickname;                      // Undefined (not assigned)


//         let output = `
//         userName : "${UserName}" (type: ${typeof UserName})
//         userAge : ${UserAge} (type: ${typeof UserAge})
//         isActive: ${isActive}(type:${typeof isActive})
//         salary: ${salary}(type:${typeof salary})
//         middlename: ${middleName}(type:${typeof middleName})
//         nickname: ${nickname}(type:${typeof nickname})
        
//         `;
//         document.getElementById('variables-output')
//     }
//     function demonstrateConstVsLet(){
//         let changeable = "i  can be changed";
//         const permanent = "i cannot  be changed";
//         // change the let variable
//         changeable ="i have been changed!";
//         // try to change const ( this would cause an error)
//         //permanent = " this would cause an error!"; //don't uncomment this!
//     }
    console.log("Hello, World!");
    console.log("Welcome to javaScript!");
    console.log(" My name is [your name]");
    console.log(" Today i'm learning to code! ");

console.log("this is a regular message")
console.warn("this is a warning message")
console.error("this is an error message")
console.info(" this is information message")


// function structure
function functionName(parameters){
    // code to execute

    return result; // optional
}c
// your first function

// function declaration - creating the function
function sayHello() {
    console.log("Hello from my first function");
}
// function call - using the function
sayHello();

// you can call it multiple times
sayHello();
sayHello();

console.log(""); // Empty line

// Another simple function

function showCurrentTime() {
    let now = new Data();
    console.log(`current time: ${now.tolocaleTimeString()}`);

}
