function changePassword() {
    var email = document.getElementById('email').value;
    var oldPassword = document.getElementById('oldPassword').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorDiv = document.getElementById('error');

    if (newPassword !== confirmPassword) {
        errorDiv.textContent = "New password and confirm password do not match.";
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(user => user.email === email && user.password === oldPassword);

    if (user) {
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        errorDiv.style.color = "green";
        errorDiv.textContent = "Password updated successfully.";
    } else {
        errorDiv.style.color = "red";
        errorDiv.textContent = "Email or old password is incorrect.";
    }
}