function registerUser() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var role = document.getElementById('role');
    var status = document.getElementById('status');

    var isFormValid = validateName(name) && validateEmail(email) && validatePassword(password) &&
        validateConfirmPassword(password, confirmPassword) &&
        validateRole(role) && validateStatus(status);

    if (isFormValid) {
        var userData = {
            name: name.value,
            email: email.value,
            password: password.value,
            role: role.value,
            status: status.value
        };

        var users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        alert('User Registered Successfully!');
        window.location.href = 'index.html';
    }
}

function validateName(name) {
    if (name.value.length === 0) {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').innerHTML = "Name is mandatory";
        return false;
    } else {
        document.getElementById('nameError').style.display = 'none';
        return true;
    }
}

function validateEmail(email) {
    var emailRegEx = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.length === 0) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = "Email is mandatory";
        return false;
    } else if (!emailRegEx.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = "Incorrect email format";
        return false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        return true;
    }
}

function validatePassword(password) {
    var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value.length === 0) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordError').innerHTML = "Password is required";
        return false;
    } else if (!passwordRegEx.test(password.value)) {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordError').innerHTML = "Incorrect password format";
        return false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
        return true;
    }
}

function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword.value.length === 0) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPasswordError').innerHTML = "Confirm Password is required";
        return false;
    } else if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPasswordError').innerHTML = "Passwords do not match";
        return false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
        return true;
    }
}

function validateRole(role) {
    if (role.value.length === 0) {
        document.getElementById('roleError').style.display = 'block';
        document.getElementById('roleError').innerHTML = "Role is required";
        return false;
    } else {
        document.getElementById('roleError').style.display = 'none';
        return true;
    }
}

function validateStatus(status) {
    if (status.value.length === 0) {
        document.getElementById('statusError').style.display = 'block';
        document.getElementById('statusError').innerHTML = "Status is required";
        return false;
    } else {
        document.getElementById('statusError').style.display = 'none';
        return true;
    }
}
