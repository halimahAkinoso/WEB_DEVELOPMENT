
        function PersonalInformation() {
            let FirstName = "Esther";
            let LastName = "Egharevba";
            let Age = 20;
            let SchoolName = true;
            let grade = A;
            let isGraduated = true;


           


            
             let Greet =  `Hello, my name ${FirstName}, lastname = ${LastName}  `; 
            let information2 = ` age = i am ${Age} years old, ls student = ${SchoolName} grade = ${grade}` `graduate :, ${isGraduated} `;
            let FullName =" Esther Egharevba"


        

            let output = `
            console.log("-----------Student Profile----");
            <strong> Arithmetic operator</strong> <br><br>
            firstname = ${FirstName}, last name= ${LastName} <br> <br>
            age = ${Age} <br>
            school name =  ${SchoolName} <br>
            grade = ${grade} <br>
            isgraduate = ${isGraduated} <br>
            `;
         document.getElementById("PersonalDetail").innerHTML = output; 
        }
        
       
       
       
function run(){
    let num1 =  Number(prompt("Enter a number")) 
    let num2 =  Number(prompt("Enter a number"))

    let Addition = num1 + num2;
    let Subtraction = num1 - num2;
    let Multiplication = num1 * num2;
    let Division = num1 /  num2;


    let outputs = `
    <strong> Arithmetic operator</strong> <br><br>
    num1 = ${num1}, num2= ${num2} <br> <br>
    Addition (num1 + num2): ${Addition} <br>
    Subtraction (num1 - num2): ${Subtraction} <br>
    Multiplication (num1 * num2): ${Multiplication} <br>
    Division (num1 / num2): ${Division} <br>
    `;

    console.log('click')



    document.getElementById('operator_output').innerHTML = outputs;
         

           
}
        

