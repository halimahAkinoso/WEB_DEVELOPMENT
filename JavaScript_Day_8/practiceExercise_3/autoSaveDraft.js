const textarea = document.getElementById('draftTextarea');
const statusDiv = document.getElementById('status');

// Function to save the text to localStorage
function saveDraft() {
    const text = textarea.value;
    localStorage.setItem('draft', text);
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    statusDiv.textContent = `Draft saved at ${timeString}`;
}

// Function to restore the text from localStorage on page load
function restoreDraft() {
    const savedText = localStorage.getItem('draft');
    if (savedText) {
        textarea.value = savedText;
        statusDiv.textContent = 'Draft restored from a previous session.';
    }
}

// Restore the draft when the page loads
window.addEventListener('load', restoreDraft);

// Auto-save the draft every 5 seconds
setInterval(saveDraft, 5000);