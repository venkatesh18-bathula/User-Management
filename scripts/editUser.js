        document.addEventListener('DOMContentLoaded', () => {
            var urlParams = new URLSearchParams(window.location.search);
            var userId = urlParams.get('id');
            loadUserDetails(userId);
        });

        function loadUserDetails(userId) {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            var user = users.find(user => user.id == userId);

            if (user) {
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                document.getElementById('role').value = user.role;
                document.getElementById('status').value = user.status;
            } else {
                alert('User not found');
            }
        }

        function updateUser() {
            var userId = new URLSearchParams(window.location.search).get('id');
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var role = document.getElementById('role');
            var status = document.getElementById('status');

            var isFormValid = validateName(name) && validateEmail(email) && validateRole(role) && validateStatus(status);

            if (isFormValid) {
                var users = JSON.parse(localStorage.getItem('users')) || [];
                var userIndex = users.findIndex(user => user.id == userId);

                if (userIndex !== -1) {
                    users[userIndex].name = name.value;
                    users[userIndex].email = email.value;
                    users[userIndex].role = role.value;
                    users[userIndex].status = status.value;

                    localStorage.setItem('users', JSON.stringify(users));

                    alert('User updated successfully!');
                    window.location.href = 'userListing.html';
                } else {
                    alert('User not found');
                    console.log('User ID:', userId, 'Users List:', users);

                }
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
