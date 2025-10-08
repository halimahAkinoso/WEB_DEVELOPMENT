// The deliverOrder function as specified in the problem
function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        // Wait for 2 seconds
        setTimeout(() => {
            // Generate a random number between 0 and 1
            const success = Math.random() < 0.5;

            if (success) {
                // 50% of the time, resolve with a success message
                resolve(`✅ Delivered: ${order}`);
            } else {
                // 50% of the time, reject with a failure message
                reject(`❌ Delivery failed: ${order}`);
            }
        }, 2000);
    });
}

// Function to call the deliverOrder and handle the promise
function checkDelivery() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Attempting delivery...";
    
    // Call the function with a sample order
    deliverOrder("Order #123")
        .then((message) => {
            // Handle the successful delivery case
            resultDiv.textContent = message;
            resultDiv.style.color = 'green';
        })
        .catch((error) => {
            // Handle the failed delivery case
            resultDiv.textContent = error;
            resultDiv.style.color = 'red';
        });
}