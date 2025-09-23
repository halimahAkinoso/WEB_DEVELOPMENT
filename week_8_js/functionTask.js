function score(){
    
let score = 60
let obtainable =100
let expectedScore = 50
if (score >= 100){
    console.log(`Congratulations!, you perform outstanding you score ${score} out of ${obtainable}`);
}else if (score >= 90){
    console.log("Grade: A -  Execellent")
}else if (score >= 80){
    console.log("Grade: B - Good work ")
}else if (score >= 70){
    console.log("Grade: C - Satisfactory")
}else if(score >= 60){
    console.log("Grade: D - Needs improvement")
    
}else{
    console.log(`Sorry! your performance is too low you are expected to score ${expectedScore} and you score ${score}`)
}




console.log("");
}




function calculatePrice(price, customerType, isFirstPurchase){
    let discount = 0;
    


    if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.10; // 20% discount
    }
  
    // Additional discount for first-time customers
    if (isFirstPurchase) {
        discount += 0.05; // Extra 5%
    }
    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
    
console.log("");
// let price = calculatePrice(2000, "senior",true);
// // Test discount function
// let result = calculateDiscount(100, "student", true);
// console.log("Price calculation:");
// console.log(`Original: $${result.originalPrice}`);
// console.log(`Discount: ${result.discountPercent}%`);
// console.log(`Final price: $${result.finalPrice}`);
}
let price = calculatePrice(2000, "senior",true);

console.log("Discount Calculator:");
console.log(`Original: $${price.originalPrice}`);
console.log(`Discount: ${price.discountPercent}%`);
console.log(`Final price: $${price.finalPrice}`);
console.log(`Final Price: N${price.finalPrice} `)



function weatherAdvice(temperature, isRaining){
    // let temperature  = 75;
    // let isRaining = true;



if (temperature < 32 && isRaining) {
    console.log("Freezing rain! Stay inside!");
} else if (temperature < 32) {
    console.log("Very cold, Wear a heavy coat!");
} else if (temperature > 60) {
    console.log("Chilly. bring a jacket.");
} else if (temperature < 80) {
    console.log("Nice weather!");
} else {
    console.log("It's hot , stay hydrated!");
}


   
}


console.log("");

function atm(balance, action, amount){
    let balance = 50000;
    if (action === "withdraw"){
        if (amount > balance){
            console.log("Insufficient fund")
            return balance
        }
    }


    console.log("welcome to task 4")

console.log("");
}
console.log("");
function personalAss(){
    console.log("welcome to task 5")
    console.log("");
}