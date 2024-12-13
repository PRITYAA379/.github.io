// Redirection Functions
function redirectToSignUp() {
    alert('Redirecting to Sign Up page...');
    window.location.href = 'signup.html'; // Change to your actual sign-up page URL
}

function redirectToLogin() {
    alert('Redirecting to Login page...');
    window.location.href = 'login.html'; // Change to your actual login page URL
}

// Add ripple effect on button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create a ripple effect dynamically
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect(); // Get the button position

        // Set the size of the ripple based on the button's size
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;

        // Position the ripple effect at the click location
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        // Add ripple class to style it
        ripple.classList.add('ripple');
        
        // Append the ripple to the button
        this.appendChild(ripple);

        // Remove the ripple after animation ends
        setTimeout(() => {
            ripple.remove();
        }, 600); // Matches the animation duration in CSS
    });
});
