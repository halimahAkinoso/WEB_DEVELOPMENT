const orders = ["Coffee", "Cake", "Juice"];
const outputDiv = document.getElementById('output');

function logMessage(message) {
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processOrders() {
    logMessage("Processing orders...");
    for (const order of orders) {
        await delay(2000);
        logMessage(`✓ ${order} ready`);
    }
    logMessage("All orders processed.");
}

processOrders();