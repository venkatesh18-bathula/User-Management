        document.addEventListener('DOMContentLoaded', () => {
            var urlParams = new URLSearchParams(window.location.search);
            var userId = urlParams.get('id');
            loadUserDetails(userId);
        });

        function loadUserDetails(userId) {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            console.log('User ID:', userId);
console.log('Users from localStorage:', users);

            var user = users.find(user => user.id === Number(userId));

            if (user) {
                document.getElementById('name').textContent = user.name;
                document.getElementById('email').textContent = user.email;
                document.getElementById('role').textContent = user.role;
                document.getElementById('status').textContent = user.status;
            } else {
                alert('User not found');
                console.log('User ID:', userId, 'Users List:', users);

            }
        }
