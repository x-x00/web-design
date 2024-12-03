(function() {
    emailjs.init('1cyHvmJDoBewnwGVA');

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        // Send the email using EmailJS
        emailjs.send('service_oyrztyj', 'template_oqmb6ha', templateParams)
            .then(function(response) {
                alert('Message sent successfully!');
                console.log('Email sent:', response.status, response.text);
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.error('Email sending error:', error);
            });
    });
})();
