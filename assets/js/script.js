const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function () {
    let firstPassword = document.getElementById('passwordInput').value;
    let confirmPassword = document.getElementById('confirmPasswordInput').value;
    if (firstPassword === confirmPassword) {
        alert('Registration Complete!')
    } else {
        alert('Passwords must match')
    }

})