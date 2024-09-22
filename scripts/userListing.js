        document.addEventListener('DOMContentLoaded', () => {
            loadUsers();
        });

        function loadUsers() {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            // console.log(users)
            var userTableBody = document.getElementById('userTableBody');
            userTableBody.innerHTML = '';

            var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));


            users.forEach((user, index) => {
                var row = `<tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.role}</td>
                    <td>${user.status}</td>
                    <td>
                        <span class="action-btn" onclick="viewUser(${user.id})">View</span>
                        <span class="action-btn" onclick="editUser(${user.id})">Edit</span>
                        <span class="action-btn" onclick="deleteUser(${user.id})">delete</span>
`;
                
                // console.log(loggedInUser)
                if (loggedInUser && loggedInUser.role === 'admin' && user.role !== 'admin') {
                    row += `<span class="action-btn" onclick="deleteUser(${user.id})">Delete</span>`;
                }

                row += `</td></tr>`;
                userTableBody.innerHTML += row;
                console.log("user ud is",user.id)
            });
        }

        function viewUser(id) {
            console.log('User ID being passed:', id);
            window.location.href = `userDetails.html?id=${id}`;
        }

        function editUser(id) {
            window.location.href = `editUser.html?id=${id}`;
        }

        function deleteUser(id) {
            var users = JSON.parse(localStorage.getItem('users')) || [];
            var updatedUsers = users.filter(user => user.id !== id);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            loadUsers();
        }
        //to check in console
//         function displayAllUsers() {
//     var users = JSON.parse(localStorage.getItem('users')) || [];

//     if (users.length === 0) {
//         console.log('No users found in local storage.');
//     } else {
//         console.log('All users in local storage:');
//         users.forEach(function(user) {
//             console.log('User ID:', user.id);
//             console.log('Name:', user.name);
//             console.log('Email:', user.email);
//             console.log('Role:', user.role);
//             console.log('Status:', user.status);
//             console.log('-------------------------');
//         });
//     }
// }


// displayAllUsers();
