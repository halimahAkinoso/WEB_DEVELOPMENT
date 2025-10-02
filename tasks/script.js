
                
       
       
       
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
        

