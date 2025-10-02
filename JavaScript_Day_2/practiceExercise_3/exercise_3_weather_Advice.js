let advice = "Bring an umbrella if raining, otherwise No umbrella needed."; 
// let temperature = 32;
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
