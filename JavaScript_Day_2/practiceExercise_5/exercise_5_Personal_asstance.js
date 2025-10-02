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
  console.log(message);
}

// Example function call to display output
personalAssistant(13, "rainy", "workday");