function handleSignIn() {
    alert('Redirecting to Sign In page...');
    // Redirect to your sign-in functionality (e.g., sign_in.html or backend route)
}

function handleLogin() {
    alert('Redirecting to Login page...');
    // Redirect to your login functionality (e.g., login.html or backend route)
}

// Add ripple effect on click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.left = `${e.clientX - this.offsetLeft}px`;
        ripple.style.top = `${e.clientY - this.offsetTop}px`;
        ripple.className = 'ripple';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
