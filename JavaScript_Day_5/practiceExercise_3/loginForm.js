document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (usernameInput === '' || passwordInput === '') {
        messageElement.textContent = 'Please fill in all fields';
    } else if (usernameInput === 'admin' && passwordInput === '1234') {
        messageElement.textContent = 'Admin login successful!';
    } else {
        messageElement.textContent = `Welcome, ${usernameInput}!`;
    }
});