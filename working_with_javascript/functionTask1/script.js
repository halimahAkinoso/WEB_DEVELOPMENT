let score = 90;

function getGrade() {
    if (score >= 100){
        console.log("outstanding! Grade: A+")
    } else if(score >= 90){
        console.log("score: 90  Grade: A");
        // return "score: 90  Grade: A";
    } else if ( score >= 80){
        console.log("score: 80 - 89  Grade:  B")
        // return "score: 80 - 89  Grade:  B";
    } else if (score >= 70){
        console.log("score: 70-79  grade: C")
        // return "score: 70-79  grade: C";
    } else if (score >= 60){
        console.log("score:60-69 grade: D");
    } else {
        console.log("score: 60 grade: F");
    }  
}



function calculatePrice(price, customerType, isFirstPurchase){
   let discount = 0;
   if (customerType === "student"){
    discount = 0.10;
   } else if (customerType === "senior"){
    discount = 0.15;
   }else if (customerType === "Employee"){
    discount = 0.20;
   };
   if (isFirstPurchase){
    discount += 0.5;
   }
    
   let totalPrice = price *(1-discount);
   return{
    originalPrice: price,
    discountPrice: discount * 100,
    totalprice: totalPrice.toFixed(2)
   };

    
}
let result = calculatePrice(100, "student", true);
console.log("price calculation");
console.log(`originalprice: ${result.originalPrice}`);
console.log(`discount: ${result.discountPrice}%`);
console.log(`total: ${result.totalprice}`);


let advice = "Bring an umbrella if raining, otherwise No umbrella needed."; 
function weatherAdvice (temperature, isRaining){
if (temperature <32 && isRaining){
    console.log(" freezing rain! stay inside!");

} else if(temperature <= 32){

    console.log("Very cold, Wear a heavy coat");
} else if(temperature  < 60){
    console.log("chilly ,bring a jacket");
} else if (temperature < 80 ){
  console.log(" Nice weather!") ; 
}else if (temperature > 80){
    console.log("it hot, stay hydrated!");
}else{

};
}
console.log(`${advice}`)

let balance = 15000;
function atm( balance, action, amount){
    if (action === "withdraw"){
        if (amount > balance){  
            console.log("Insufficient funds");
            return balance;
        } else if (amount > 500){
            console.log("withdrawer limit exceeded  maximum withdrawer is 500 at once")
            return balance;
        }

    } else if (action === "deposite"){
        if (amount <= 0 ){
            console.log("Invalide amount");
            return balance;
        }else{
            balance += amount;
            console.log(`deposite successful , ${balance}`);
            return balance;
        }
    } else{
        console.log(`invalide action ,use  'withdraw' or deposite`);
        return balance
    }

}



balance = atm(balance, "withdraw", 5000);
balance = atm(balance, "withdraw", 2000);
balance = atm(balance, "withdraw", 1000);


function personalAssistant(time, weather, day) {
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
}
