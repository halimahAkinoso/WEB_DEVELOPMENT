const textToType = "Welcome to JavaScript Timers!";
const pElement = document.getElementById('typing-text');
let charIndex = 0;
let blinkInterval;

function typeWriter() {
    if (charIndex < textToType.length) {
        pElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust the speed here
    } else {
        // Challenge: Start blinking after typing is complete
        blinkInterval = setInterval(blink, 500);
    }
}

function blink() {
    pElement.style.visibility = (pElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
}

function startTyping() {
    // Reset the state
    pElement.textContent = "";
    charIndex = 0;
    clearInterval(blinkInterval);
    pElement.style.visibility = 'visible';
    typeWriter();
}

// Start the effect when the page loads
window.onload = startTyping;