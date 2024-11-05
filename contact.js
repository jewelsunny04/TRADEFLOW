document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the data to a server
    // For demonstration, we'll just show a success message

    document.getElementById('response-message').innerText = 'Thank you for your message, ' + name + '! We will get back to you soon.';

    // Optionally clear the form fields
    this.reset();
});