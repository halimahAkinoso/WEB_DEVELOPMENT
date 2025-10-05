function score(score, obtainable,expectedScore ){
    
// let score = 60
// let obtainable =100
// let expectedScore = 50
if (score >= 100){
    console.log(`Congratulations!, you perform outstanding you score ${score} out of ${obtainable}`);
}else if (score >= 90){
    console.log("Grade: A -  Excellent")
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

  let balance = 50000;
function atm(balance, action, amount){
  
    if (action === "withdraw"){
        if (amount > balance){
            console.log("Insufficient fund")
            return balance;
        }else if(amount> 500){
            console.log("withdrawal limit exceeded maximum withdrawal is 500 at once")
            return balance;    
            
        }
    }else if (action === "deposit"){
        if (amount <= 0){
            console.log("Invalid amount");
            return balance
        }else {
            balance +=amount;
            console.log(`deposite successful, ${balance}`);
            return balance;
        }
    }else{
        console.log(`Invalid action, make use of withdrwal or deposite`);
        return balance
    }
}

   

console.log("");

console.log("");
function personalAss(){



  let message = day === "workday" ? "Get focused for work!" :
                day === "weekend" ? "Chill out, it's the weekend!" :
                day === "holiday" ? "Happy holiday!" : "Invalid day type.";
  message += (weather === "rainy") ? " Don't forget your umbrella." :
             (weather === "sunny") ? " Grab some sunscreen if you're heading out." :
             (weather === "cloudy") ? " Might be a chill day." : " Weather condition not recognized.";
  if (time < 12 && time >= 0) {
    message += " Have a great morning!";
  } else if (time >= 12 && time < 18) {
    message += " Have a productive afternoon!";
  } else if (time >= 18 && time <= 23) {
    message += " Wind down for the evening.";
  } else {
    message += " Invalid time.";
  }



    console.log("welcome to task 5")
    console.log("");
}