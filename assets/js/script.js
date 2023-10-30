const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {

    let firstPassword = document.getElementById('passwordInput').value;
    let confirmPassword = document.getElementById('confirmPasswordInput').value;
    if (firstPassword === confirmPassword) {
        alert('Registration Complete!')
    } else {
        event.preventDefault();
        alert('Passwords must match')
        document.getElementById('confirmPasswordInput').value = '';
        document.getElementById('confirmPasswordInput').focus();
    }

})