document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    const messageDiv = document.getElementById('message');
    if (result.success) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password.';
    }
});