function tellJoke() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here's a funny joke!");
    }, 3000); // 3000 milliseconds = 3 seconds
  });
}

tellJoke().then((joke) => {
  console.log(joke);
});