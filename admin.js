document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
        // Redirect to dashboard.html
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.'); // Show an error message
    }
});
