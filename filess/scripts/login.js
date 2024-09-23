function loginUser() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var loginEmailError = document.getElementById('loginEmailError');
    var loginPasswordError = document.getElementById('loginPasswordError');

    if (email.value.length === 0) {
        loginEmailError.style.display = 'block';
        loginEmailError.innerHTML = "Email is required";
        return;
    } else {
        loginEmailError.style.display = 'none';
    }

    if (password.value.length === 0) {
        loginPasswordError.style.display = 'block';
        loginPasswordError.innerHTML = "Password is required";
        return;
    } else {
        loginPasswordError.style.display = 'none';
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.email === email.value && user.password === password.value);

    if (user) {
        alert('Login successful!');
<<<<<<<< HEAD:files/scripts/login.js
        window.location.href = './filess/userListing.html';
========
        window.location.href = './files/filess/userListing.html';
>>>>>>>> 954025a08e1d4f32eb0c30fccf293e281b50b844:filess/scripts/login.js
    } else {
        alert('Invalid email or password');
    }
}